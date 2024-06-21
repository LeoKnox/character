export const Bar = ({ label, hp, health }) => {
  return (
    <div>
      <p>label: {label}</p>
      <p><progress id="hpBar" value="32" max="100"> 32% </progress></p>

    </div>
  );
};
