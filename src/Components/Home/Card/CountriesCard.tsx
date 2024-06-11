const CountriesCard = () => {
  return (
    <section className="max-w-xs shadow-md cursor-pointer hover:shadow-xl duration-300">
      <div>
        <img
          src="https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="font-semibold p-5">
        <h3 className="mb-3">Germany</h3>
        <p>
          Population : <span className="font-normal">data</span>
        </p>
        <p>
          Region : <span className="font-normal">data</span>
        </p>
        <p>
          Capital : <span className="font-normal">data</span>
        </p>
      </div>
    </section>
  );
};

export default CountriesCard;
