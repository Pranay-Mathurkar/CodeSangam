import MedicineReminderCard from "./MedicineReminderCard";
import WellnessTrackerCard from "./WellnessTrackerCard";
import DailyChecklist from "./DailyChecklist";
import GraphCard from "./GraphCard";

export default function DashboardCards() {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-min">
      <div data-aos="fade-up" className="h-96">
        <MedicineReminderCard />
      </div>

      <div data-aos="fade-up" data-aos-delay="100" className="h-96">
        <WellnessTrackerCard />
      </div>

      <div data-aos="fade-up" data-aos-delay="200" className="h-96">
        <DailyChecklist />
      </div>

      <div data-aos="fade-up" data-aos-delay="300" className="h-96 lg:col-span-2">
        <GraphCard />
      </div>
    </div>
  );
}