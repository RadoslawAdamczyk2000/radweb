import Review from "./Review";

const Reviews = () => {
    return( 
        <section>
            <article>
                <Review
                    author="Filip Bukowiecki"
                    comment="Obecnie sięga rekordowych 12,3 proc., nie spada, będzie jeszcze wyższa, podobnie jak raty kredytów Polaków, a mimo wszystko Solidarna Polska chce zagłosować za prezesem Glapińskim na drugą kadencję. D"
                    rate={4}
                    image="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80"
                />
            </article>
            <div className="buttons">
                <div className="button"/>
                <div className="button"/>
                <div className="button"/>
                <div className="button"/>
            </div>
        </section>
    )
}
export default Reviews;