import { weeklyAgendaTexts } from "../../../shared/ui";
import { GoHomeButton } from "../component";

export default function WeeklyAgenda() {
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <GoHomeButton />
        <h1
          style={{
            fontSize: "20px",
            fontFamily: "Montserrat",
            margin: 0,
          }}
        >
          {weeklyAgendaTexts.MENU_WEEKLY_AGENDA_TITLE}
        </h1>
      </div>
      <div />
    </div>
  );
}
