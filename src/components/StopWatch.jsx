import formatTime from '../utils/FormateTime';

export default function StopWatch({ time }) {
  const { hours, minutes, seconds } = formatTime(time);
  return (
    <div className="watch-container">
      <h2 className="clock">
        Completion Time: {hours}:{minutes}:{seconds}
      </h2>
    </div>
  );
}
