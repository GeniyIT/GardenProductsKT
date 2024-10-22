import { FC } from 'react'
import styles from './DiscountForm.module.css'
import { useForm } from 'react-hook-form'

interface IDiscountFormProps {
    title: string,
    ImgUrl: string
}

export const DiscountForm: FC<IDiscountFormProps> = ({ title, ImgUrl }) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <div className={styles.discount_form}>
            <h1 className={styles.discount_form_title}>{title}</h1>
            <div className={styles.discount_form_item_container}>
                <div className={styles.discount_form_img_container}>
                    <img className={styles.discount_form_img} src={ImgUrl} alt="" />
                </div>
                <form className={styles.discount_form_form} onSubmit={handleSubmit(onSubmit)}>
                    <input className={styles.discount_form_input} type="text" placeholder="Name" {...register("name")} />
                    <input className={styles.discount_form_input} type="tel" placeholder="Phone number" {...register("phoneNumber")} />
                    <input className={styles.discount_form_input} type="email" placeholder="Email" {...register("email")} />
                    <button className={styles.discount_form_button}>Get a discount</button>
                </form>
            </div>
        </div>
    )
}