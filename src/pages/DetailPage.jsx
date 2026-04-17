import { useParams } from "react-router-dom";
import { useCards } from "@/context/CardsContext";
import DetailHead from "../components/detail/head/DetailHead";
import DetailContent from "../components/detail/DetailContent";

export default function DetailPage() {
  const { id } = useParams();
  const { cards } = useCards();
  
  const card = cards.find(c => c.id === Number(id));

  if(!card) return <div>Not Found</div>;

  return (
    <>
      <DetailHead card={card} />
      <DetailContent card={card} />
    </>
  );
}