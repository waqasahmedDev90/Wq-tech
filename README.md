# WQ Tech Solutions

Professional Next.js and Tailwind CSS foundation for the WQ Tech Solutions
website. The current milestone contains the responsive Header, mega menus,
mobile navigation, and animated Hero section.

## Run on Windows

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in the browser.

## Project structure

```text
app/
  globals.css                  Tailwind theme and global base styles
  layout.js                    Fonts, metadata, and global smooth scroll
  page.jsx                     Homepage composition only

components/
  layout/
    header/
      Header.jsx               Header state and composition
      DesktopNav.jsx           Desktop navigation
      MegaMenus.jsx            Services and industries mega menus
      MobileNav.jsx            Responsive mobile navigation
    SmoothScroll.jsx           Lenis initialization
  sections/
    home/
      HeroSection.jsx          Homepage hero section
  ui/
    ButtonLink.jsx             Reusable CTA button link
    Container.jsx              Reusable site-width container

data/
  navigation.js                Navigation, services, industries, capabilities

hooks/
  useHeaderScroll.js           Header scroll state
  useHeroMotion.js             GSAP hero entrance and parallax
  useSmoothScroll.js           Lenis and ScrollTrigger connection

lib/
  cn.js                        Class-name helper

public/images/
  hero-topographic.png         Supplied hero background
  wq-logo.png                  Original WQ Tech logo
```

## Build commands

```bash
npm run lint
npm run build
```

This project uses JavaScript and JSX only. It contains no TypeScript source.
