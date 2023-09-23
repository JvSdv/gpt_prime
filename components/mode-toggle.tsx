import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button 
      variant="secondary" 
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      { theme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}