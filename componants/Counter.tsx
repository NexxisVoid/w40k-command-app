type CounterProps = {
  value: number;
  onChange: (delta: number) => void;
};

export default function Counter({ value, onChange }: CounterProps) {
  return (
    <div className="counter">
      <button onClick={() => onChange(-1)}>-</button>
      <span>{value}</span>
      <button onClick={() => onChange(1)}>+</button>
    </div>
  );
}
