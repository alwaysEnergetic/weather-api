import S from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={S.spinner}>
      <div className={S.doubleBounce1}></div>
      <div className={S.doubleBounce2}></div>
    </div>
  );
}
