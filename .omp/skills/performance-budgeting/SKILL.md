---
name: performance-budgeting
description: Zero-layout-shift (CLS) rendering, critical CSS inlining, font display swap, and asset prefetching.
version: 1.0.0
category: frontend-engineering
---

# Performance Budgeting

## Overview
Zero-layout-shift (CLS) rendering, critical CSS inlining, font display swap, and asset prefetching.

## Implementation Best Practices
1. **Performance First:** Implement minimal, zero-bloat code without unnecessary external dependencies.
2. **Visual Consistency:** Harmonize with the established retro 8-bit arcade and modern Framer design system.
3. **Accessibility:** Ensure high contrast, semantic HTML, and intuitive keyboard navigation.
4. **Resilience:** Provide robust fallbacks for edge cases, offline state, and varying device viewports.

## Core Directives
- Prefer pure CSS and vanilla Web APIs where possible.
- Adhere strictly to the color token palette: `--deep-dark` (#0E0F14), `--box-dark` (#181924), `--arcade-orange` (#FF8C00), `--gold` (#F59E0B), `--pixel-green` (#2ECC40).
- Preserve 8-bit stepped pixel geometry for retro components.
