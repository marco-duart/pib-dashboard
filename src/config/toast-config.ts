import { theme } from "../assets/styles/theme";

export const toastConfig = {
  position: "top-center" as const,
  className: "dashboard-toast",
  duration: 4000,
  style: {
    border: `2px solid ${theme.colors.primary.main}`,
    padding: theme.spacing(4),
    background: theme.colors.background.paper,
    color: theme.colors.text.primary,
    fontFamily: theme.typography.fontFamily,
    borderRadius: theme.shape.borderRadius.md,
  },
};
