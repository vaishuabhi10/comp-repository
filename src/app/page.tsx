"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons/faCircleChevronRight";

import Radio from "./Components/Radio";
import { useState } from "react";


export default function Home() {

  const [selectedOption, setSelectedOption] = useState("");

  // const handleOptionChange = (value: string | boolean) => {
  //   setSelectedOption(value);
  // };

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value);
    };
  return (
    <>
      <main className="m-4">
        <div className="space-x-4 space-y-4">
          <Button>Accept Request</Button>
          <Button>Send</Button>
          <Button variant={"primaryType1"}>Accepted by me</Button>
          <Button variant="primaryType1">Pending</Button>
          <Button variant="primaryType1">Decline</Button>
          

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
          
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                 <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Button>Comfortable</Button>
              
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        </div>
        <hr />
        <div className="m-3">     
          <div className="space-x-4 space-y-5">
              <Radio
              label=" Bride"
              value="bride"
              checked={selectedOption === "bride"}
              onChange={handleOptionChange}
              variant="type1"
              className="pr-14 pl-16 py-2 w-4 h-4"
              />
              <Radio
                label=" Groom"
                value="groom"
                checked={selectedOption === "groom"}
                onChange={handleOptionChange}  
                variant="type2"         
              />
              <Radio
            label=" No"
            value="no"
            checked={selectedOption === "no"}
            onChange={handleOptionChange} 
            variant="type3"           
          />       
          <Radio
            label=" Accepted"
            value="accept"
            checked={selectedOption === "accept"}
            onChange={handleOptionChange} 
            variant="type4"
            className="h-5 w-5"           
          />
          <Radio
            label="  Yes"
            value="yes"
            checked={selectedOption === "yes"}
            onChange={handleOptionChange}
            variant="type5"
          />
          <Radio
            label=" Doesn't matter"
            value="matter"
            checked={selectedOption === "matter"}
            onChange={handleOptionChange}
            variant="type6"
            className="px-11 py-1"
          />
          <Radio
            label=" Click"
            value="click"
            checked={selectedOption === "click"}
            onChange={handleOptionChange}
            variant="type7"
          />
          </div>     
        </div>     
      </main>
      <Footer />
    </>
  );
}
