import { ChangeEvent, useEffect, useState } from "react";
import { usePetsHook } from "../slices/usePetsHook";
import { useNavigate } from "react-router-dom";

const AddPetForm = () => {
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const [file, setFile] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [selectedAudio, setSelectedAudio] = useState<
    string | ArrayBuffer | null
  >(null);

  const navigate = useNavigate();

  const [petName, setPetName] = useState("");
  const [petKind, setPetKind] = useState("");
  const [petDescription, setPetDescription] = useState("");

  const { create, createState, clr } = usePetsHook();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result);
        setFile(file);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleAudioChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("audio changed");
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();
      console.log("entered the change");

      reader.onload = () => {
        setSelectedAudio(reader.result);
        setAudioFile(file);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = () => {
    console.log(petName);
    console.log(petKind);
    console.log(petDescription);
    console.log(selectedImage);
    console.log(selectedAudio);
    const imageBlob = new Blob([file!], { type: "image/png" });
    const audioBlob = new Blob([audioFile!], { type: "audio/mp3" });
    console.log(imageBlob);
    console.log(audioBlob);
    const formData = new FormData();
    formData.append("name", petName);
    formData.append("type", petKind);
    formData.append("description", petDescription);
    formData.append("image", imageBlob);
    formData.append("audio", audioBlob);
    create(formData);
  };

  useEffect(() => {
    if (createState === "success") {
      navigate("/pets");
      clr();
    }
  }, [createState]);

  return (
    <div>
      <div className="card card-image-cover">
        {selectedImage && (
          <img src={selectedImage} alt="" className="card-image" />
        )}
        <div className="card-body">
          <input
            type="file"
            className="input-file"
            onChange={handleImageChange}
          />
        </div>

        <div className="card-body">
          <h2 className="card-header">
            <input
              className="input"
              placeholder="Type your pet name!"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPetName(e.target.value)
              }
            />
          </h2>
          <h2 className="card-header">
            <input
              className="input"
              placeholder="What kind of pet is it!"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPetKind(e.target.value)
              }
            />
          </h2>
          <p className="text-content2">
            <textarea
              className="textarea textarea-block max-w-full"
              placeholder="Type a description(optional)"
              rows={8}
              id="message"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setPetDescription(e.target.value)
              }
            ></textarea>
          </p>
          <div className="card-footer">
            {selectedAudio && (
              <audio key={selectedAudio.toString()} controls>
                <source src={selectedAudio} />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
          <div className="card-footer">
            <input
              type="file"
              className="input-file"
              onChange={handleAudioChange}
            />
          </div>
          <div className="card-footer">
            <button
              className={
                createState === "loading"
                  ? "btn-secondary btn btn-loading"
                  : "btn-secondary btn"
              }
              onClick={handleSubmit}
              disabled={createState === "loading" ? true : false}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AddPetForm };
