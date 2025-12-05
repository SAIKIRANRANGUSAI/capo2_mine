import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import FooterOne from "@/layouts/footers/FooterOne";
import ContactusArea from "./ContactusArea";

const Contactus = () => {
	return (
		<>
			<Breadcrumb title="Contact Us" subtitle="Contact Us" />
      		<ContactusArea />
		</>
	);
};

export default Contactus;
