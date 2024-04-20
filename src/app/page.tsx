"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons/faCircleChevronRight";

export default function Home() {
  return (
    <>
      <main className="m-4">
        <div className="space-x-4 space-y-4">
          <Button>Log in</Button>
          <Button>Register Now</Button>
          <Button className="px-9 py-1.5" variant="secondary">
            Search
          </Button>
          <Button className="px-4 py-1.5" variant="secondary">
            Show More Professions
          </Button>
          <Button variant="ternery">Show it here</Button>
          <Button variant="icon">
            <FontAwesomeIcon icon={faChevronRight} />
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
          <Button>View All</Button>
          <FontAwesomeIcon
            icon={faCircleXmark}
            size="2x"
            style={{ color: "#ec9597" }}
          />
          <Button className="px-9 py-1.5" variant={"primaryType1"}>
            Yes
          </Button>
          <Button className="px-9 py-1.5">No</Button>
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            size="2x"
            style={{ color: "#ec9597" }}
          />
          <Button size="lg" variant="danger">
            Cancel
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
