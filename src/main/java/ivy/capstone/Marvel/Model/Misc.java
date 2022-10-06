package ivy.capstone.Marvel.Model;

import javax.persistence.*;

@Entity
@Table(name = "miscellaneous")
public class Misc {

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

    @Column(name = "images")
    private String images;

    public Misc(){}

    public Misc(long id, String name, int price, String ratings, String images) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.ratings = ratings;
        this.images = images;
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

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }
}
