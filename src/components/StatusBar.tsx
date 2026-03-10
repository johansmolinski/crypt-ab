import { useStatus } from "@/context/StatusContext";

const StatusBar = () => {
  const { statusText } = useStatus();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-6 border-t border-border bg-background flex items-center px-4">
      <span className="text-label truncate">{statusText}</span>
    </div>
  );
};

export default StatusBar;
