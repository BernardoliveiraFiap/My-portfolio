import "../../../../css/Certifications.css";

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <div className="certifications__content">
        <h2 className="certifications__title">Certificacoes</h2>
        <p className="certifications__subtitle">
          Reconhecimentos oficiais em cloud e fundamentos de infraestrutura.
        </p>
        <div className="certifications__grid">
          <a
            className="certifications__card"
            href="https://learn.microsoft.com/pt-br/users/EnzoOliveira-3869/credentials/69332B799344F0AD?ref=https%3A%2F%2Fwww.linkedin.com%2F"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="certifications__badge"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABnRSTlMAAAAAAABupgeRAAAAWklEQVR4AWP4FKBEJPrip8wABrV7GOp3EYtGhgWjFoxaMGrBqAXf/OSIRD995CEWVO9hqN1FLBoOYNlnotF3iI7/O4lHQOVL3hONPo9agB2NWjBqwagFoxYAAB2zMZ7bQW2tAAAAAElFTkSuQmCC"
              alt="Microsoft Certified: Azure Fundamentals"
            />
            <div>
              <h3>AZ-900</h3>
              <p>Microsoft Certified: Azure Fundamentals</p>
            </div>
          </a>
          <a
            className="certifications__card"
            href="https://www.credly.com/badges/1c4cb384-02c7-4f3c-a067-c7c7c4dcac90/linked_in?t=sxsiog"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="certifications__badge"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAflBMVEUjLz4dKjohLT0NHzFQV2FKUlwAFywnM0IaKDgzPUpWXGUVJDbq6+3i4+X29/jLzc99gogAABubnqP///9yd393fIPY2twAAAAAAB8AACK1t7ujpqsADicAFitiaHGGi5GUmJ1pb3cAFCqJjpQ8RlIuOUZDS1errrEGHC/DxslAWrmhAAAA1UlEQVR4Ad2OhWGFMBBAI0iIlhzuTth/wHqLjPBf5FzQ64Hx10++H8H3GPX8IMQEE8JCGnFC0ImQSps3GVuIE5lCpii6EOQFhFAaHVV1ZvPm1rWSGbSqk3UvvQ70cKlkI8QFUGtMZ3QzxRz4uRPmMBvoFrAlVEVlB4jIpW1S8W6l/SLSjfF93xw6IZPDDCFBvi52Sd2zs+1haSB+OxHhzz2Is3KycKRomtp2mthYyTFr0YlbKwCtTJZp0LWbO4YuEBd09WHMYXlDCWPoAaMuCBzF6BX5AC2JD1u/hbEIAAAAAElFTkSuQmCC"
              alt="AWS Certified Cloud Practitioner"
            />
            <div>
              <h3>AWS Cloud Practitioner</h3>
              <p>Fundamentos de cloud na AWS</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
