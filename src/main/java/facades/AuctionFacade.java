package facades;

import entities.Auction;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;
import java.util.ArrayList;
import java.util.List;

public class AuctionFacade {


    private static EntityManagerFactory emf;
    private static AuctionFacade instance;

    public static AuctionFacade getAuctionFacade(EntityManagerFactory _emf) {
        if (instance == null)   {
            emf = _emf;
            instance = new AuctionFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public List<Auction> getAllAuctions()   {
        List<Auction> auctionList = new ArrayList<>();
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Auction> query = em.createQuery("SELECT a from Auction a",entities.Auction.class);
            List<Auction> auctions = query.getResultList();

            for (Auction a: auctions) {
                auctionList.add(a);
            }
            return auctionList;
        } finally {
            em.close();
        }
    }
}
