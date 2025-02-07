import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://wvobtwwbhuufqopwjisq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2b2J0d3diaHV1ZnFvcHdqaXNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MzU3NDMsImV4cCI6MjA1NDUxMTc0M30.-Fjcoh-RXkQOGti-UklwAWMvwqXScrSbwBj1IpV66tc");

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  async function getCharacters() {
    const { data, error } = await supabase
      .from("character")
      .select(`
        id,
        name,
        weapon,
        weapon_details:weapon(name)
      `);
    
    if (error) {
      console.error("Error:", error);
      return;
    }
    
    console.log(data);
    setCharacters(data);
  }

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
          {character.name} - Weapon: {character.weapon_details?.name || "No weapon"}
        </li>
      ))}
    </ul>
  );
}

export default App;