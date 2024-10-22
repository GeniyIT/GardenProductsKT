import { Categories } from "./components/Categories/Categories";
import { DiscountForm } from "./components/DiscountForm/DiscountForm";
import { MainBanner } from "./components/MainBanner/MainBanner";
import { Sale } from "./components/Sale/Sale";
import styles from "./MainPage.module.css";

export function MainPage() {

    return (
        <div className={styles.main}>
            <MainBanner title="Amazing Discounts on Garden Products!"/>
            <Categories />
            <DiscountForm title="5% off on the first order" ImgUrl="/img/DiscountFormImage.png"/>
            <Sale />
        </div>
    )
}
