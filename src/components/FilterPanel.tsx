type FilterPanelProps = {
  location: string;
  setLocation: (value: string) => void;
  rating: number;
  setRating: (value: number) => void;
};

export default function FilterPanel({
  location,
  setLocation,
  rating,
  setRating,
}: FilterPanelProps) {
  return (
    <div className="flex gap-4 mb-6">
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Locations</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Warangal">Warangal</option>
        <option value="Vellore">Vellore</option>
        <option value="Chennai">Chennai</option>
      </select>

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border p-2 rounded"
      >
        <option value={0}>All Ratings</option>
        <option value={4}>4+</option>
        <option value={4.5}>4.5+</option>
      </select>
    </div>
  );
}