import { useState } from "react";

interface Pet {
  name: string;
  breed: string;
}
function PetInfo() {
  const [pet, setPet] = useState<Pet>({ name: "Willy", breed: "cat" });

  return (
    <div>
      <h1 className="Title"> Tell Us About Your Pet </h1>
      <p>
        My pet named {pet.name} is a {pet.breed}.
      </p>
    </div>
  );
}

export default PetInfo;
