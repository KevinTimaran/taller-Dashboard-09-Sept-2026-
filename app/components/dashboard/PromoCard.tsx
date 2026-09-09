import PromoArt from "./PromoArt";
export default function PromoCard({
  onNotice,
}: {
  onNotice: (message: string) => void;
}) {
  return (
    <section className="promo-card">
      <div className="promo-copy">
        <h2>Need More Stats?</h2>
        <p>Upgrade to pro for added benefits.</p>
        <button
          className="green-button pro-button"
          onClick={() =>
            onNotice("Pro upgrades are not available in this demo.")
          }
        >
          <span className="upgrade-icon">↑</span>Go Pro Now
        </button>
      </div>
      <PromoArt />
    </section>
  );
}
