import { Text } from '../Text';

export const LinedInfo = ({ num, title, info, morgauge }) => {
  return (
    <div className="xs:w-full sm:w-full md:w-3/4 lg:w-3/4">
      <Text style="text-[1rem] mb-2 text-start" value={num} />
      <hr className="mb-2 hr-footer" />
      <Text style="text-[1.2rem] mb-2 font-bold" value={title} />
      {morgauge ? (
        <span className="text-secondary-8">
          {info}
          <h6
            className="ms-1 morgauge-text w-fit cursor-pointer"
            type="button"
            data-te-toggle="modal"
            data-te-target="#exampleModalCenter"
            // data-te-ripple-init
            // data-te-ripple-color="light"
          >
            Check Mortgauge Calculator
          </h6>
        </span>
      ) : (
        <Text
          style="text-[1rem] text-start c-deep-black leading-6"
          value={info}
        />
      )}
    </div>
  );
};
