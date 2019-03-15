namespace TheMovingCompany.Models {
    public class Order {
        public long Id { get; set; }
        public EService Service { get; set; }
        
    }

    public enum EService {
        MOVING = 0,
        PACKING,
        CLEANING,
    }
}