import React from "react";
import {
  FaBusAlt,
  FaUserFriends,
  FaMapMarkedAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { MdSupportAgent, MdEventAvailable } from "react-icons/md";

const ObjectivesSection = () => {
  return (
    <section className="px-6 py-16 bg-indigo-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 text-center">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Comfort & Safety */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg text-center border-2 border-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="text-4xl text-blue-500 mb-4">
            <FaShieldAlt />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Comfort & Safety First
          </h3>
          <ul className="text-gray-600">
            <li className="mb-2">
              <strong>Modern Vehicles:</strong> Air-conditioned, clean &
              spacious rides for a stress-free journey.
            </li>
            <li>
              <strong>Safety Assured:</strong> GPS tracking, verified drivers,
              and regular sanitization for your peace of mind.
            </li>
          </ul>
        </div>

        {/* Experienced Staff */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg text-center border-2 border-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="text-4xl text-blue-500 mb-4">
            <FaUserFriends />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Friendly & Experienced Crew
          </h3>
          <ul className="text-gray-600">
            <li className="mb-2">
              <strong>Professional Drivers:</strong> Polite, punctual, and
              well-trained drivers for your safety.
            </li>
            <li>
              <strong>Tour Experts:</strong> Our support team guides you from
              planning to drop-off.
            </li>
          </ul>
        </div>

        {/* Flexible Travel Options */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg text-center border-2 border-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="text-4xl text-blue-500 mb-4">
            <MdEventAvailable />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Tailored Travel Plans
          </h3>
          <ul className="text-gray-600">
            <li className="mb-2">
              <strong>Event Travel:</strong> Be it weddings, tours, school
              trips, or business meets — we cover all.
            </li>
            <li>
              <strong>Custom Packages:</strong> Hourly, daily, or long trips —
              design your ride your way.
            </li>
          </ul>
        </div>

        {/* Wide Coverage */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg text-center border-2 border-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="text-4xl text-blue-500 mb-4">
            <FaMapMarkedAlt />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Broad Travel Network
          </h3>
          <ul className="text-gray-600">
            <li className="mb-2">
              <strong>All Destinations:</strong> From cityscapes to remote
              villages, we’re just a booking away.
            </li>
            <li>
              <strong>On-Time Always:</strong> Our punctuality keeps your plans
              on track.
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg text-center border-2 border-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="text-4xl text-blue-500 mb-4">
            <MdSupportAgent />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Round-the-Clock Support
          </h3>
          <ul className="text-gray-600">
            <li className="mb-2">
              <strong>Instant Help:</strong> Modify bookings or clear doubts
              instantly via phone or chat.
            </li>
            <li>
              <strong>Dedicated Agents:</strong> Personalized assistance from
              our friendly travel experts.
            </li>
          </ul>
        </div>

        {/* Affordable Pricing */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg text-center border-2 border-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="text-4xl text-blue-500 mb-4">
            <FaBusAlt />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Budget-Friendly Pricing
          </h3>
          <ul className="text-gray-600">
            <li className="mb-2">
              <strong>Transparent Rates:</strong> No hidden fees — clear and
              upfront pricing always.
            </li>
            <li>
              <strong>Best Value Deals:</strong> Premium service that suits
              every pocket.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
