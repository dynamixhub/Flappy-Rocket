module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00FFFF", // cyan-400
          50: "#ECFEFF", // cyan-50
          100: "#CFFAFE", // cyan-100
          200: "#A5F3FC", // cyan-200
          300: "#67E8F9", // cyan-300
          400: "#22D3EE", // cyan-400
          500: "#06B6D4", // cyan-500
          600: "#0891B2", // cyan-600
          700: "#0E7490", // cyan-700
          800: "#155E75", // cyan-800
          900: "#164E63", // cyan-900
        },
        secondary: {
          DEFAULT: "#FF6B35", // orange-500
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          200: "#FED7AA", // orange-200
          300: "#FDBA74", // orange-300
          400: "#FB923C", // orange-400
          500: "#F97316", // orange-500
          600: "#EA580C", // orange-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800
          900: "#7C2D12", // orange-900
        },
        accent: {
          DEFAULT: "#FFFF00", // yellow-400
          50: "#FEFCE8", // yellow-50
          100: "#FEF9C3", // yellow-100
          200: "#FEF08A", // yellow-200
          300: "#FDE047", // yellow-300
          400: "#FACC15", // yellow-400
          500: "#EAB308", // yellow-500
          600: "#CA8A04", // yellow-600
          700: "#A16207", // yellow-700
          800: "#854D0E", // yellow-800
          900: "#713F12", // yellow-900
        },
        background: {
          DEFAULT: "#0A0A0F", // slate-900
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1E293B", // slate-800
          900: "#0F172A", // slate-900
        },
        surface: {
          DEFAULT: "#1A1A2E", // indigo-900
          50: "#EEF2FF", // indigo-50
          100: "#E0E7FF", // indigo-100
          200: "#C7D2FE", // indigo-200
          300: "#A5B4FC", // indigo-300
          400: "#818CF8", // indigo-400
          500: "#6366F1", // indigo-500
          600: "#4F46E5", // indigo-600
          700: "#4338CA", // indigo-700
          800: "#3730A3", // indigo-800
          900: "#312E81", // indigo-900
        },
        text: {
          primary: "#FFFFFF", // white
          secondary: "#B0B0B0", // gray-400
          50: "#F9FAFB", // gray-50
          100: "#F3F4F6", // gray-100
          200: "#E5E7EB", // gray-200
          300: "#D1D5DB", // gray-300
          400: "#9CA3AF", // gray-400
          500: "#6B7280", // gray-500
          600: "#4B5563", // gray-600
          700: "#374151", // gray-700
          800: "#1F2937", // gray-800
          900: "#111827", // gray-900
        },
        success: {
          DEFAULT: "#00FF88", // emerald-400
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          200: "#A7F3D0", // emerald-200
          300: "#6EE7B7", // emerald-300
          400: "#34D399", // emerald-400
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065F46", // emerald-800
          900: "#064E3B", // emerald-900
        },
        warning: {
          DEFAULT: "#FFB800", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
          800: "#92400E", // amber-800
          900: "#78350F", // amber-900
        },
        error: {
          DEFAULT: "#FF3366", // rose-500
          50: "#FFF1F2", // rose-50
          100: "#FFE4E6", // rose-100
          200: "#FECDD3", // rose-200
          300: "#FDA4AF", // rose-300
          400: "#FB7185", // rose-400
          500: "#F43F5E", // rose-500
          600: "#E11D48", // rose-600
          700: "#BE123C", // rose-700
          800: "#9F1239", // rose-800
          900: "#881337", // rose-900
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Exo 2', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '900',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 255, 255, 0.3)',
        'neon-strong': '0 0 30px rgba(0, 255, 255, 0.5)',
        'neon-accent': '0 0 20px rgba(255, 255, 0, 0.3)',
        'neon-success': '0 0 20px rgba(0, 255, 136, 0.3)',
        'neon-error': '0 0 20px rgba(255, 51, 102, 0.3)',
      },
      animation: {
        'neon-glow': 'neon-glow 2s ease-in-out infinite',
        'score-bounce': 'score-bounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'particle-burst': 'particle-burst 0.5s ease-out forwards',
      },
      transitionTimingFunction: {
        'game': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '150': '150ms',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}