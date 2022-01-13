package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import entities.User;
import utils.EMF_Creator;
import facades.AuctionFacade;
import entities.Auction;
import dtos.AuctionDTO;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.core.UriInfo;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Path("auctions")
public class AuctionResource {
    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory();
    private static final Gson gson = new GsonBuilder().setPrettyPrinting().create();
    private static final AuctionFacade auctionFacade = AuctionFacade.getAuctionFacade(EMF);

    @Context
    private UriInfo context;

    @Context
    SecurityContext securityContext;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("allauctions")
    public List<Auction> allAuctions() {
        {
            return auctionFacade.getAllAuctions();
        }
    }

    @POST
    @Path("newAuction")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String createAuction(String auction) {
        Auction a1 = gson.fromJson(auction, Auction.class);
        auctionFacade.createAuction(a1.getName(), a1.getDate(), a1.getTime(), a1.getLocation());
        return "{\"msg\": \"New Auction created: " + a1.getName() + "\"}";
    }
}
