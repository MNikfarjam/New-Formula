do{
		N=prompt("Enter Number Of Series",1);
		}while(N<=0)
		A=1;
		B=1;
		C=0;
		D=-1;
		F=0;
		document.write("<div>")
		for(i=0;i<N;i++){
			
			C--;
			D=C*D;
			F=(B/D)+F;
			B=A*B;
			A++;
		
		}
	
		document.write("<span>"+B+"</span>");
		document.write("<span>"+F+"</span>");
		document.write("</div>")
		