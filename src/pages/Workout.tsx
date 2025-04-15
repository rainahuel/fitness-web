import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Workout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/generator");
  }, [navigate]);

  return null; // No mostramos nada, solo redirige automáticamente
}
