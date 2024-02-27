import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface TimeContextProps {
  handleExpandButton: () => void;
  isExpand: boolean;
  formattedTime: string;
  whatTime: string;
}

interface TimeProviderProps {
  children: ReactNode;
}

const TimeContext = createContext<TimeContextProps | undefined>(undefined);

function TimeProvider({ children }: TimeProviderProps) {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [formattedTime, setFormattedTime] = useState<string>("");
  const [whatTime, setWhatTime] = useState<string>("morning");

  function handleExpandButton() {
    setIsExpand((prev) => !prev);
  }

  const updateFormattedTime = () => {
    const currentTime = new Date();
    // Extract hours and minutes
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    if (hours >= 5 && hours < 12) {
      setWhatTime("morning");
    } else if (hours >= 12 && hours < 17) {
      setWhatTime("afternoon");
    } else if (hours >= 17 && hours < 21) {
      setWhatTime("evening");
    } else {
      setWhatTime("night");
    }

    // Format the hours and minutes as a string in the "HH:mm" format
    const newFormattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;

    setFormattedTime(newFormattedTime);
  };

  useEffect(() => {
    // Initial update
    updateFormattedTime();

    // Set up interval to update every minute
    const intervalId = setInterval(() => {
      updateFormattedTime(); // Update formatted time
    }, 5000); // 60000 milliseconds = 1 minute

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const contextValue: TimeContextProps = {
    handleExpandButton,
    isExpand,
    formattedTime,
    whatTime,
  };

  return (
    <TimeContext.Provider value={contextValue}>{children}</TimeContext.Provider>
  );
}

function useTime() {
  const context = useContext(TimeContext);
  if (context === undefined)
    throw new Error("TimeContext was used outside of the TimeProvider");
  return context;
}

export { TimeProvider, useTime };
