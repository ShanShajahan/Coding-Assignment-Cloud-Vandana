
import java.util.Random;

public class shuffle {
	
	public static void main(String[] args) {
		Random r=new Random();
		int [] arr = {3,6,1,9,5};
		int n=arr.length-1;
		for(int i=0;i<=n;i++) {
			int random=r.nextInt(n);
			while(i==random) {
				random=r.nextInt(n);
				break;
			}
			int temp=arr[i];
			arr[i]=arr[random];
			arr[random]=temp;
			
		}
		for(int i=0;i<=n;i++) {
			System.out.println(arr[i]);
		}
	}

}
