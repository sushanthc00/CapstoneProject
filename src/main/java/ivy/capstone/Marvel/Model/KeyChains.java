package ivy.capstone.Marvel.Model;

import javax.persistence.*;

@Entity
@Table(name = "keychains")
public class KeyChains {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "chain_name")
    private String chainName;

    @Column(name = "price")
    private int price;

    @Column(name = "ratings")
    private String ratings;

    public KeyChains(){}

    public KeyChains(long id, String chainName, int price, String ratings) {
        this.id = id;
        this.chainName = chainName;
        this.price = price;
        this.ratings = ratings;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getChainName() {
        return chainName;
    }

    public void setChainName(String chainName) {
        this.chainName = chainName;
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
