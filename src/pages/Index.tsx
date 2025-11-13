import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/projects/db36fc3a-f694-4184-bcb1-0a25e094522e/files/43bc8e2e-b9d1-474b-8b61-b4ea71b3873f.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-4 animate-fade-in">
        <h1 className="font-dancing text-6xl md:text-8xl text-white drop-shadow-2xl text-center animate-scale-in">
          Для тебя
        </h1>
        
        <Button
          onClick={() => setShowMessage(true)}
          size="lg"
          className="font-montserrat text-xl px-12 py-8 bg-gradient-to-r from-[#FF6B9D] to-[#FFA07A] hover:from-[#FF5A8C] hover:to-[#FF8F69] text-white border-0 shadow-2xl animate-pulse-glow transition-all duration-300 hover:scale-110 rounded-full"
        >
          <Icon name="Heart" className="mr-2" size={28} />
          Нажми меня
        </Button>
      </div>

      <Dialog open={showMessage} onOpenChange={setShowMessage}>
        <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur border-2 border-[#FF6B9D]">
          <DialogHeader>
            <DialogTitle className="font-dancing text-4xl text-center text-[#FF6B9D] flex items-center justify-center gap-2">
              <Icon name="Heart" className="text-[#FF6B9D] animate-pulse" size={32} />
              Признание
              <Icon name="Heart" className="text-[#FF6B9D] animate-pulse" size={32} />
            </DialogTitle>
            <DialogDescription className="font-montserrat text-2xl text-center text-[#FF6B9D] pt-4 leading-relaxed">
              Я тебя люблю! 💕
              <br />
              <span className="text-3xl font-semibold mt-2 block">
                Давай встречаться?
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button
              onClick={() => setShowMessage(false)}
              className="font-montserrat bg-gradient-to-r from-[#FF6B9D] to-[#FFA07A] hover:from-[#FF5A8C] hover:to-[#FF8F69] text-white"
            >
              <Icon name="Sparkles" className="mr-2" size={20} />
              Закрыть
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
