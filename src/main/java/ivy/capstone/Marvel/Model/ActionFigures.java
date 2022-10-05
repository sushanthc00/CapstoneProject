package ivy.capstone.Marvel.Model;

import javax.persistence.*;

@Entity
@Table(name = "action_figures")
public class ActionFigures{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private int price;

    @Column(name = "ratings")
    private String ratings;

    public ActionFigures(){}

    public ActionFigures(long id, String name, int price, String ratings) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.ratings = ratings;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getRatings() {
        return ratings;
    }

    public void setRatings(String ratings) {
        this.ratings = ratings;
    }
}

