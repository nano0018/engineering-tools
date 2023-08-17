const CardLayout = () => {
  return (
    <article className="card mb-3">
      <section className="card-body text-center">
        <h2 className="">Card title</h2>
        <form className="container text-center">
          <legend>Disabled fieldset example</legend>
          <section className="mb-3 row gap-2">
            <div className="col px-0">
              <label className="form-label">Label</label>
              <input className="form-control" type="text" />
            </div>
            <div className="col px-0">
              <label className="form-label">Label</label>
              <input className="form-control" type="text" />
            </div>
          </section>
          <section className="mb-3 row">
            <div className="col px-0">
              <label className="form-label">Label</label>
              <input className="form-control" type="text" />
            </div>
          </section>
          <section className="mb-3 row px-0">
            <button type="button" className="btn btn-primary mb-2">
              Primary
            </button>
            <button type="button" className="btn btn-danger mb-2">
              Danger
            </button>
          </section>
        </form>
      </section>
    </article>
  );
};

export default CardLayout;
