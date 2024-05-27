import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppDispatch } from "store";
import { closeModal } from "slices/cart/slice";
import { useDispatch } from "react-redux";

export default function OnPathChange() {
  const { pathname } = useLocation();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(closeModal());
  }, [pathname]);
  return null;
}
