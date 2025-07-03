module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "habibauiuxframerwebsiteathens-gray":
          "var(--habibauiuxframerwebsiteathens-gray)",
        habibauiuxframerwebsiteblack: "var(--habibauiuxframerwebsiteblack)",
        habibauiuxframerwebsitebunting: "var(--habibauiuxframerwebsitebunting)",
        "habibauiuxframerwebsitecod-gray-40":
          "var(--habibauiuxframerwebsitecod-gray-40)",
        "habibauiuxframerwebsitecod-gray-50":
          "var(--habibauiuxframerwebsitecod-gray-50)",
        "habibauiuxframerwebsitecod-gray-80":
          "var(--habibauiuxframerwebsitecod-gray-80)",
        "habibauiuxframerwebsitedodger-blue":
          "var(--habibauiuxframerwebsitedodger-blue)",
        "habibauiuxframerwebsitedusty-gray":
          "var(--habibauiuxframerwebsitedusty-gray)",
        "habibauiuxframerwebsitefuchsia-blue":
          "var(--habibauiuxframerwebsitefuchsia-blue)",
        habibauiuxframerwebsitemelrose: "var(--habibauiuxframerwebsitemelrose)",
        "habibauiuxframerwebsitemine-shaft":
          "var(--habibauiuxframerwebsitemine-shaft)",
        habibauiuxframerwebsitepampas: "var(--habibauiuxframerwebsitepampas)",
        "habibauiuxframerwebsitepurple-heart":
          "var(--habibauiuxframerwebsitepurple-heart)",
        habibauiuxframerwebsitesilver: "var(--habibauiuxframerwebsitesilver)",
        habibauiuxframerwebsitewhite: "var(--habibauiuxframerwebsitewhite)",
        "habibauiuxframerwebsitewhite-10":
          "var(--habibauiuxframerwebsitewhite-10)",
        "habibauiuxframerwebsitewhite-4":
          "var(--habibauiuxframerwebsitewhite-4)",
        "habibauiuxframerwebsitewhite-40":
          "var(--habibauiuxframerwebsitewhite-40)",
        "habibauiuxframerwebsitewhite-70":
          "var(--habibauiuxframerwebsitewhite-70)",
        "habibauiuxframerwebsitewhite-8":
          "var(--habibauiuxframerwebsitewhite-8)",
        "habibauiuxframerwebsitewhite-black":
          "var(--habibauiuxframerwebsitewhite-black)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "habibauiux-framer-website-figtree-medium":
          "var(--habibauiux-framer-website-figtree-medium-font-family)",
        "habibauiux-framer-website-inter-bold":
          "var(--habibauiux-framer-website-inter-bold-font-family)",
        "habibauiux-framer-website-inter-medium":
          "var(--habibauiux-framer-website-inter-medium-font-family)",
        "habibauiux-framer-website-inter-regular":
          "var(--habibauiux-framer-website-inter-regular-font-family)",
        "habibauiux-framer-website-semantic-heading-1":
          "var(--habibauiux-framer-website-semantic-heading-1-font-family)",
        "habibauiux-framer-website-semantic-heading-2":
          "var(--habibauiux-framer-website-semantic-heading-2-font-family)",
        "habibauiux-framer-website-semantic-link":
          "var(--habibauiux-framer-website-semantic-link-font-family)",
        "text-sm-regular": "var(--text-sm-regular-font-family)",
        "text-sm-semibold": "var(--text-sm-semibold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
