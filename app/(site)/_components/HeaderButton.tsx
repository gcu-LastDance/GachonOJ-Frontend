import useUserStore from "@/store/useUserStore";
import React from "react";
import HeaderMemberDropdown from "./HeaderMemberDropdown";
import HeaderLoginButton from "./HeaderLoginButton";

export default function HeaderButton() {
  const { token } = useUserStore();

  return <div>{token ? <HeaderMemberDropdown /> : <HeaderLoginButton />}</div>;
}
