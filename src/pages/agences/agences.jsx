import FeaturedPropertiesx from "../../components/featuredPropertiesx/FeaturedPropertiesx";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../components/navbar/Navbar";
import { Helmet } from "react-helmet-async";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import Header from "../../components/header/Header";

const Agence = () => {
  const [openDate, setOpenDate] = useState(false);
  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div>
      <Helmet>
        <title>agences</title>
        <meta
          name="description"
          content="voici nos agences disponibles "
        />
      </Helmet>
      <Navbar />
      <div className="ctrdate" style={{ display: "inline-block" }}>
        <h3>
          choisissez la date a la quelle vous souhaitez louer votre voiture :
          <div
            className="headerSearchItem"
            style={{ display: "inline-block" }}
          >
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="headerIcon"
              style={{ color: "orange" }}
            />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
              style={{ color: "orange" }}
            >
              {`${format(selectedDates[0].startDate, "MM/dd/yyyy")} to ${format(
                selectedDates[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setSelectedDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={selectedDates}
                className="datex"
                minDate={new Date()}
              />
            )}
          </div>
        </h3>
      </div>

      <div className="homeContainer">
        <h1 className="homeTitlee" style={{ color: "orange" }}>
          nos agences
        </h1>
        <FeaturedPropertiesx selectedDates={selectedDates} />
      </div>
      <Footer />
    </div>
  );
};

export default Agence;
