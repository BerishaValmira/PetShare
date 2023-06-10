import { useEffect, useRef } from "react";

type CardProps = {
  title?: string;
  category?: string;
  message?: string;
  audioData?: string;
  imageData?: string;
};

const Card = ({
  title = "No Title Provided",
  category = "No Category Provided",
  message = "No Message Provided",
  audioData,
  imageData = "https://source.unsplash.com/random/200x200", // Provide a default image URL
}: CardProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioData && audioRef.current) {
      // Convert the audio data from base64 to a Uint8Array
      const audioArray = Uint8Array.from(atob(audioData), (c) =>
        c.charCodeAt(0)
      );
      const blob = new Blob([audioArray], { type: "audio/mp3" });
      const url = URL.createObjectURL(blob);
      audioRef.current.src = url;
    }
  }, [audioData]);

  return (
    <div className="card card-image-cover">
      <img
        className="h-auto max-w-full"
        src={`data:image/jpeg;base64,${imageData}`}
        alt=""
        width={400}
        height={400}
      />
      <div className="card-body">
        <h2 className="card-header">{title}</h2>
        <h2 className="card-header">{category}</h2>
        <p className="text-content2">{message}</p>
        {audioData && <audio ref={audioRef} controls />}
        <div className="card-footer">
          <button className="btn-secondary btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export { Card };
