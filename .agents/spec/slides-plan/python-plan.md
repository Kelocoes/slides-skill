# Slide Specification Plan: Python Fundamentals

## Destination & Objectives
- **Target Audience**: Undergraduate Computer Science / Engineering Students at Universidad Icesi
- **Topic**: Python Fundamentals (Execution Model, Variables & Memory, Control Flow & Loops, Functions & Scope, Data Structures, OOP, Exception Handling & File I/O)
- **Target Slide Count**: 32 slides (Structured with progressive frames for visual clarity and zero text overload)
- **Output Files**:
  - Primary Deliverable: `slides/python/python.pdf`
  - HTML Canvas Medium: `slides/python/python.html`
  - Shared Diagrams: `slides/shared/python-memory-management.svg`, `slides/shared/python-gil.svg`, `slides/shared/python-loop-execution.svg`, `slides/shared/python-function-execution.svg`, `slides/shared/python-oop-class-object.svg`

## Decisions & Scope Boundary
- **In-Scope Key Concepts**:
  - CPython execution pipeline (Source -> AST -> Bytecode -> PVM) & GIL architecture
  - Object references, immutability vs mutability, reference counting & GC
  - Control flow, iterators, `for` loop mechanics, `while` loops, break/continue/else
  - Functions, parameters (`*args`, `**kwargs`), LEGB scope, first-class functions & lambdas
  - Data structures (Lists, Tuples, Dicts, Sets) and Comprehensions
  - OOP: Classes, `__init__`, `self`, Encapsulation, Inheritance, Polymorphism, Dunder methods
  - Robust Error Handling (`try-except-else-finally`) & Context Managers (`with`)
- **Out-of-Scope**: Asyncio/multiprocessing deep dives, C-extensions, advanced metaclasses.

## Pedagogical Critique (Internal QA Pass)
- **Visual diagrams on complex concepts**: Reusable architecture diagrams compiled via `mermaid-cli` to `slides/shared/` and registered in `registry.json`.
- **Frames for dense topics**: Progressive reveal (frame 1, frame 2) as distinct slides to prevent slide text crowding.
- **Zero emojis**: Standard SVG icons used across all cards and sidebars.

## Slide Map Overview (32 Slides)
1. **Title Slide**: Python Fundamentals (`icesi.titleSlideA`)
2. **Section 1**: Module 1 - Execution & Memory Model (`icesi.sectionSlideC`)
3. **Slide 3**: CPython Architecture & Bytecode (`icesi.slideSidebarLeftBlue`)
4. **Slide 4**: The Global Interpreter Lock (GIL) (`icesi.slideTwoCols` with `slides/shared/python-gil.svg`)
5. **Slide 5**: Memory Model: Everything is an Object (`icesi.slideTwoCols` with `slides/shared/python-memory-management.svg`)
6. **Slide 6**: Mutability vs Immutability (`icesi.slideFourCards`)
7. **Section 2**: Module 2 - Variables & Data Types (`icesi.sectionSlideEBlue`)
8. **Slide 8**: Primitive Types & Dynamic Typing (`icesi.slideStandard`)
9. **Slide 9**: Variable Binding & Identity (`is` vs `==`) (`icesi.slideTwoCols`)
10. **Section 3**: Module 3 - Control Flow & Iteration Protocol (`icesi.sectionSlideEGreen`)
11. **Slide 11**: Conditional Statements & Pattern Matching (`icesi.slideTwoCols`)
12. **Slide 12**: Iteration Protocol & For Loops (`icesi.slideSidebarLeftOrange` with `slides/shared/python-loop-execution.svg`)
13. **Slide 13**: Loop Control (Break, Continue, Else) - Frame 1 (`icesi.slideTwoCols`)
14. **Slide 14**: Loop Control (Break, Continue, Else) - Frame 2 (`icesi.slideTwoCols`)
15. **Section 4**: Module 4 - Functions & Scope (`icesi.sectionSlideEYellow`)
16. **Slide 16**: Function Anatomy & Parameter Passing (`icesi.slideStandard`)
17. **Slide 17**: Flexible Arguments (`*args` and `**kwargs`) (`icesi.slideTwoCols`)
18. **Slide 18**: LEGB Scope Resolution Rule (`icesi.slideSidebarLeftPurple` with `slides/shared/python-function-execution.svg`)
19. **Slide 19**: First-Class Functions & Lambdas (`icesi.slideFourCards`)
20. **Section 5**: Module 5 - Data Structures & Comprehensions (`icesi.sectionSlideEOrange`)
21. **Slide 21**: Sequence Types (Lists vs Tuples) (`icesi.slideTwoCols`)
22. **Slide 22**: Associative & Set Types (Dicts & Sets) (`icesi.slideTwoCols`)
23. **Slide 23**: List & Dict Comprehensions (`icesi.slideStandard`)
24. **Section 6**: Module 6 - Object-Oriented Programming (`icesi.sectionSlideC`)
25. **Slide 25**: Classes, Instances & `__init__` (`icesi.slideSidebarLeftBlue` with `slides/shared/python-oop-class-object.svg`)
26. **Slide 26**: Encapsulation & Property Decorators (`icesi.slideTwoCols`)
27. **Slide 27**: Inheritance & Polymorphism (`icesi.slideStandard`)
28. **Slide 28**: Special Dunder Methods (`__str__`, `__repr__`, `__len__`) (`icesi.slideFourCards`)
29. **Section 7**: Module 7 - Robust Code & File I/O (`icesi.sectionSlideE`)
30. **Slide 30**: Exception Handling Flow (`try`, `except`, `else`, `finally`) (`icesi.slideTwoCols`)
31. **Slide 31**: Context Managers & `with` Statement (`icesi.slideStandard`)
32. **Section 8**: Summary & Key Takeaways (`icesi.sectionSlideA`)

## Handoff & Execution
Compile diagrams to SVG using `mermaid-cli`, update `slides/shared/registry.json`, build presentation HTML `slides/python/python.html`, and export to PDF `slides/python/python.pdf`.
