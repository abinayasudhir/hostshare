import Select, { components } from "react-select";
import { getCountries } from "../../helpers/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CityPicker = () => {
  const navigate = useNavigate();

  const options = ["Anywhere", ...(getCountries() as any)].map((d: any) => ({
    label: d,
    value: d,
  }));

  const [selectedValue, setValue] = useState<any>(options[0]);

  return (
    <Select
      placeholder="Anywhere"
      isClearable={true}
      options={options}
      value={selectedValue}
      onChange={(value) => {
        setValue(value);
        if (value && value?.value !== "Anywhere") {
          navigate(`/search?city=${value?.value}`);
        } else {
          navigate("/");
        }
      }}
      components={{ IndicatorSeparator: () => null }}
      styles={{
        dropdownIndicator: (base, state) => ({
          ...base,
          transition: "all .2s ease",
          transform: state.selectProps.menuIsOpen
            ? "rotate(180deg)"
            : "rotate(360deg)",
        }),
        control: (base) => ({
          ...base,
          border: 0,
          boxShadow: "none",
        }),
        option: (base) => ({
          ...base,
          ":hover": {
            backgroundColor: "#329a9a",
            color: "#fff",
          },
          ":active": {
            backgroundColor: "#329a9a",
            color: "#fff",
          },
        }),
      }}
      classNames={{
        control: () => "p-1 border-none shadow-none",
        input: () => "text-lg",
        option: () => "text-lg",
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary: "#329a9a",
          primary25: "#329a9a",
          primary50: "#329a9a",
          neutral70: "#fff",
          neutral90: "#fff",
        },
      })}
    />
  );
};

const options = [
  { label: "1 guest", value: "1-guest" },
  { label: "2 guest", value: "2-guest" },
];

const Control = ({ children, ...props }: any) => {
  return (
    <components.Control {...props}>
      <div className="flex flex-row justify-between w-full items-end">
        <div className="flex flex-col items-start">
          <span className="text-xs font-bold px-2 py-1 pb-0">GUESTS</span>
          <span className="text-sm text-neutral-500">{children[0]}</span>
        </div>
        <div>{children[1]}</div>
      </div>
    </components.Control>
  );
};

const GuestSelection = () => {
  return (
    <Select
      placeholder="Anywhere"
      isClearable={false}
      options={options}
      value={options[0]}
      onChange={(value) => {}}
      components={{ Control, IndicatorSeparator: () => null }}
      styles={{
        dropdownIndicator: (base, state) => ({
          ...base,
          transition: "all .2s ease",
          transform: state.selectProps.menuIsOpen
            ? "rotate(180deg)"
            : "rotate(360deg)",
        }),
        option: (base) => ({
          ...base,
          ":hover": {
            backgroundColor: "#329a9a",
            color: "#fff",
          },
          ":active": {
            backgroundColor: "#329a9a",
            color: "#fff",
          },
        }),
      }}
      classNames={{
        control: () => "p-1 border-2",
        input: () => "text-lg",
        option: () => "text-lg",
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary: "#329a9a",
          primary25: "#329a9a",
          primary50: "#329a9a",
          neutral70: "#fff",
          neutral90: "#fff",
        },
      })}
    />
  );
};

export { CityPicker, GuestSelection };
