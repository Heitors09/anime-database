import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

const Buttons = () => {
  return (
    <div className="flex gap-4">
        <Button className="bg-white text-[#0a0a0a] hover:bg-gray-100 transition-colors flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          AI Recommendations
        </Button>

    </div>
  )
}

export default Buttons
