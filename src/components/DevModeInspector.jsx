import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Grid, Eye, Cpu, Settings, ChevronUp, ChevronDown, CheckSquare, Square } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export default function DevModeInspector() {
  const { pathname } = useLocation()
  const [active, setActive] = useState(false)
  const [showOutlines, setShowOutlines] = useState(false)
  const [showGrid, setShowGrid] = useState(false)
  const [gridWidth, setGridWidth] = useState('6xl') // '6xl' or '4xl'
  const [inspectEnabled, setInspectEnabled] = useState(false)
  const [collapsed, setCollapsed] = useState(true)

  // Real-time telemetry states
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight)
  const [scrollY, setScrollY] = useState(window.scrollY)
  const [domElements, setDomElements] = useState(0)
  const [ibadanTime, setIbadanTime] = useState('')

  // Hover Inspector state
  const [hoveredEl, setHoveredEl] = useState(null)
  const [hoveredRect, setHoveredRect] = useState(null)

  // Listeners for telemetry
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth)
      setViewportHeight(window.innerHeight)
    }

    const handleScroll = () => {
      setScrollY(Math.round(window.scrollY))
    }

    // Set initial element count
    setDomElements(document.getElementsByTagName('*').length)

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    // Recalculate elements occasionally or on route change
    const interval = setInterval(() => {
      setDomElements(document.getElementsByTagName('*').length)
    }, 3000)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      clearInterval(interval)
    }
  }, [pathname])

  // Ibadan (GMT+1) local time clock
  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Africa/Lagos',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      setIbadanTime(time)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  // Sync state with HTML root classes
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dev-mode-active', active)
    root.classList.toggle('dev-outlines', active && showOutlines)

    if (!active) {
      // Clean up when inspector is disabled
      setHoveredEl(null)
      setHoveredRect(null)
    }
  }, [active, showOutlines])

  // Mouse Hover Inspector logic
  useEffect(() => {
    if (!active || !inspectEnabled) {
      setHoveredEl(null)
      setHoveredRect(null)
      return
    }

    const handleMouseMove = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY)
      if (!el) return

      // Don't inspect the inspector panel, overlays, or tooltip itself
      if (
        el.closest('.dev-inspector-panel') ||
        el.closest('.dev-grid-overlay') ||
        el.closest('.dev-inspect-tooltip')
      ) {
        return
      }

      setHoveredEl(el)
      setHoveredRect(el.getBoundingClientRect())
    }

    const handleMouseLeave = () => {
      setHoveredEl(null)
      setHoveredRect(null)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [active, inspectEnabled])

  // Get active Tailwind CSS breakpoint label
  const getBreakpoint = (width) => {
    if (width >= 1536) return '2xl (1536px+)'
    if (width >= 1280) return 'xl (1280px+)'
    if (width >= 1024) return 'lg (1024px+)'
    if (width >= 768) return 'md (768px+)'
    if (width >= 640) return 'sm (640px+)'
    return 'xs (<640px)'
  }

  // Parse element's Tailwind classes
  const parseClasses = (className) => {
    if (typeof className !== 'string') return { spacing: [], layout: [], other: [] }
    const list = className.split(/\s+/).filter(Boolean)
    const spacing = []
    const layout = []
    const other = []

    list.forEach((c) => {
      if (/^(p|m|gap)-|^(p|m)[xytrbl]-/.test(c)) {
        spacing.push(c)
      } else if (
        /^(flex|grid|block|inline|relative|absolute|fixed|inset|top|bottom|left|right|z-|w-|h-|col-|row-|items-|justify-)/.test(
          c
        )
      ) {
        layout.push(c)
      } else {
        other.push(c)
      }
    })

    return { spacing, layout, other }
  }

  const classCategories = hoveredEl ? parseClasses(hoveredEl.className) : null

  return (
    <>
      {/* 12-Column Responsive Alignment Grid Overlay */}
      {active && showGrid && (
        <div className="dev-grid-overlay pointer-events-none fixed inset-y-0 left-1/2 z-40 w-full -translate-x-1/2 px-6 flex justify-between">
          <div
            className={`mx-auto flex h-full w-full justify-between gap-4 sm:gap-6 ${
              gridWidth === '6xl' ? 'max-w-6xl' : 'max-w-4xl'
            }`}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-full w-full bg-ink/[0.012] border-x border-ink/[0.03] last:border-r"
              />
            ))}
          </div>
        </div>
      )}

      {/* Hover Element Outline Highlight */}
      {active && inspectEnabled && hoveredRect && (
        <div
          className="pointer-events-none fixed z-50 border border-dashed border-ink/40 bg-ink/[0.03] transition-[top,left,width,height] duration-75"
          style={{
            left: hoveredRect.left,
            top: hoveredRect.top,
            width: hoveredRect.width,
            height: hoveredRect.height,
          }}
        >
          {/* Dimension Label Tag */}
          <span className="absolute bottom-1 right-1 bg-ink text-paper font-mono text-[9px] px-1 py-0.5 border border-transparent uppercase tracking-wider">
            {Math.round(hoveredRect.width)} × {Math.round(hoveredRect.height)} PX
          </span>
        </div>
      )}

      {/* Element Inspector Floating Tooltip Card */}
      {active && inspectEnabled && hoveredEl && hoveredRect && (
        <div
          className="dev-inspect-tooltip pointer-events-none fixed z-50 bg-paper border border-ink/15 p-3 text-ink font-mono text-[10px] w-64 flex flex-col gap-2 shadow-sm transition-[top,left] duration-75 select-none"
          style={{
            left: Math.max(10, Math.min(window.innerWidth - 270, hoveredRect.left)),
            top: hoveredRect.top - 165 > 10 ? hoveredRect.top - 175 : hoveredRect.bottom + 10,
          }}
        >
          {/* Element Header */}
          <div className="flex items-center justify-between border-b border-ink/12 pb-1.5">
            <span className="font-bold text-ink uppercase">
              &lt;{hoveredEl.tagName.toLowerCase()}&gt;
            </span>
            <span className="text-ink/45">
              {Math.round(hoveredRect.width)}×{Math.round(hoveredRect.height)}
            </span>
          </div>

          {/* Spacing Tokens */}
          {classCategories && classCategories.spacing.length > 0 && (
            <div>
              <p className="text-[9px] text-ink/45 uppercase tracking-wider font-bold mb-0.5">Spacing Tokens</p>
              <div className="flex flex-wrap gap-1">
                {classCategories.spacing.map((c) => (
                  <span key={c} className="border border-ink/12 px-1 py-0.5 bg-ink/[0.02] text-ink/75">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Layout Configuration */}
          {classCategories && classCategories.layout.length > 0 && (
            <div>
              <p className="text-[9px] text-ink/45 uppercase tracking-wider font-bold mb-0.5">Layout Rules</p>
              <div className="flex flex-wrap gap-1">
                {classCategories.layout.map((c) => (
                  <span key={c} className="border border-ink/12 px-1 py-0.5 bg-ink/[0.02] text-ink/75">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Other Tailwind Classes */}
          {classCategories && classCategories.other.length > 0 && (
            <div className="overflow-hidden">
              <p className="text-[9px] text-ink/45 uppercase tracking-wider font-bold mb-0.5">Other Classes</p>
              <p className="truncate text-ink/65 text-[9px]">
                {classCategories.other.join(' ')}
              </p>
            </div>
          )}

          {classCategories && classCategories.spacing.length === 0 && classCategories.layout.length === 0 && classCategories.other.length === 0 && (
            <span className="text-ink/45 italic">No utility classes detected.</span>
          )}
        </div>
      )}

      {/* Floating Developer Telemetry Dashboard & Controller Panel */}
      <div className="dev-inspector-panel fixed bottom-4 left-4 z-50 font-mono">
        <AnimatePresence>
          {collapsed ? (
            /* Collapsed Floating Status Trigger Badge */
            <motion.button
              layoutId="inspector-panel"
              onClick={() => setCollapsed(false)}
              className="flex items-center gap-2 border border-ink/15 bg-paper/95 backdrop-blur-sm px-3.5 py-2 text-xs text-ink/70 hover:text-ink hover:bg-ink/[0.04] transition-all cursor-pointer rounded-none"
            >
              <Cpu size={13} className={active ? 'text-emerald-500 animate-pulse' : 'text-ink/55'} />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                {active ? 'DEV MODE // ON' : 'DEV MODE // OFF'}
              </span>
              <ChevronUp size={12} className="text-ink/35" />
            </motion.button>
          ) : (
            /* Fully Expanded Controls Panel */
            <motion.div
              layoutId="inspector-panel"
              className="w-72 border border-ink/15 bg-paper/95 backdrop-blur-md p-4 text-ink flex flex-col gap-4 shadow-sm rounded-none"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-ink/12 pb-2">
                <div className="flex items-center gap-1.5">
                  <Terminal size={14} className="text-ink" />
                  <span className="text-[10px] uppercase tracking-wider font-bold">
                    SYSTEM INJECTOR v1.0
                  </span>
                </div>
                <button
                  onClick={() => setCollapsed(true)}
                  className="p-1 hover:bg-ink/[0.04] transition-colors rounded-none cursor-pointer"
                  aria-label="Collapse panel"
                >
                  <ChevronDown size={14} />
                </button>
              </div>

              {/* Oyo State Local Time */}
              <div className="flex items-center justify-between bg-ink/[0.02] border border-ink/12 p-2 text-center text-xs">
                <span className="text-[9px] uppercase tracking-wider text-ink/45">Oyo State Time (GMT+1)</span>
                <span className="font-bold font-mono tracking-widest">{ibadanTime || '--:--:--'}</span>
              </div>

              {/* Toggles Checklist */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-semibold">Dev Master Mode</span>
                  <button
                    onClick={() => {
                      const next = !active
                      setActive(next)
                      if (!next) {
                        setShowGrid(false)
                        setShowOutlines(false)
                        setInspectEnabled(false)
                      }
                    }}
                    className="flex items-center justify-center p-0.5 hover:bg-ink/[0.04] cursor-pointer text-ink"
                  >
                    {active ? <CheckSquare size={16} /> : <Square size={16} />}
                  </button>
                </div>

                <div className={`flex flex-col gap-2 border-t border-ink/12 pt-2.5 transition-opacity duration-200 ${active ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
                  {/* Outlines Toggle */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Eye size={12} className="text-ink/65" />
                      <span className="text-[10px] uppercase tracking-wider text-ink/75">Show Outlines</span>
                    </div>
                    <button
                      onClick={() => setShowOutlines(v => !v)}
                      className="cursor-pointer text-ink"
                    >
                      {showOutlines ? <CheckSquare size={15} /> : <Square size={15} />}
                    </button>
                  </div>

                  {/* Alignment Grid Toggle */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Grid size={12} className="text-ink/65" />
                      <span className="text-[10px] uppercase tracking-wider text-ink/75">12-Col Grid Lines</span>
                    </div>
                    <button
                      onClick={() => setShowGrid(v => !v)}
                      className="cursor-pointer text-ink"
                    >
                      {showGrid ? <CheckSquare size={15} /> : <Square size={15} />}
                    </button>
                  </div>

                  {/* Grid Width Config (Only visible when Grid lines are on) */}
                  {showGrid && (
                    <div className="flex items-center justify-between pl-4 text-[9px]">
                      <span className="text-ink/55 uppercase tracking-wider">Grid Boundary Target</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setGridWidth('6xl')}
                          className={`px-1.5 py-0.5 border rounded-none uppercase tracking-wider cursor-pointer ${
                            gridWidth === '6xl'
                              ? 'border-ink bg-ink text-paper font-bold'
                              : 'border-ink/15 hover:border-ink/35 text-ink/70'
                          }`}
                        >
                          6XL (Navbar/Projects)
                        </button>
                        <button
                          onClick={() => setGridWidth('4xl')}
                          className={`px-1.5 py-0.5 border rounded-none uppercase tracking-wider cursor-pointer ${
                            gridWidth === '4xl'
                              ? 'border-ink bg-ink text-paper font-bold'
                              : 'border-ink/15 hover:border-ink/35 text-ink/70'
                          }`}
                        >
                          4XL (Hero/About)
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Element Inspector Toggle */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Settings size={12} className="text-ink/65" />
                      <span className="text-[10px] uppercase tracking-wider text-ink/75">Element Inspector</span>
                    </div>
                    <button
                      onClick={() => setInspectEnabled(v => !v)}
                      className="cursor-pointer text-ink"
                    >
                      {inspectEnabled ? <CheckSquare size={15} /> : <Square size={15} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Telemetry Section */}
              <div className="border-t border-ink/12 pt-3 flex flex-col gap-1.5 text-[9px] text-ink/55">
                <span className="text-[10px] text-ink/70 font-semibold uppercase tracking-wider mb-0.5">// TELEMETRY</span>
                
                <div className="flex justify-between">
                  <span>VIEWPORT SCALE:</span>
                  <span className="font-bold text-ink/75">
                    {viewportWidth} × {viewportHeight} PX
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>ACTIVE BREAKPOINT:</span>
                  <span className="font-bold text-ink/75 uppercase">
                    {getBreakpoint(viewportWidth)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>SCROLL COORDINATE:</span>
                  <span className="font-bold text-ink/75 uppercase">
                    Y: {scrollY} PX
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>DOCUMENT NODES:</span>
                  <span className="font-bold text-ink/75 uppercase">
                    {domElements} ELEMENTS
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>ACTIVE ROUTE / HASH:</span>
                  <span className="font-bold text-ink/75 uppercase truncate max-w-[140px]" title={pathname}>
                    {pathname === '/' ? 'HOME' : pathname}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
