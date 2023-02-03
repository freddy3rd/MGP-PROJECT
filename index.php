<?php
  session_start();
  require_once 'db.conn.php';
  define('MYSITE',true);

 
?>
<!DOCTYPE html>
<html lang="en">
    <head>
		<title style="color: brown">MISTERGRAND PHILIPPINES</title>
		<link rel="icon" href="images/logo.png">
        <!-- <meta http-equiv="refresh" content="100"> -->
        <meta name="viewport" content="width=device-width, initial-scale=0.5">
        <meta charset="utf-8">
        <link rel="stylesheet" href="stylesheet/index.css">
		<link rel="stylesheet" href="stylesheet/navigation.css">
        <link rel="stylesheet" href="stylesheet/utiliiyClasses.css">
        <link rel="stylesheet" href="stylesheet/prevWinner.css">
        <link rel="stylesheet" href="stylesheet/popup.css">
        <link rel="stylesheet" href="stylesheet/preload.css">
        <link rel="stylesheet" href="stylesheet/footer.css">

		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
		<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
		<script src="javascript/index.js" defer></script>
		<script src="javascript/navigation.js" defer></script>
		<script src="javascript/action.js" defer></script>
    </head>
    <body>

        <div class="header d-grid justify-between  p-absolute">
            <img src="images/logo.png" alt="">
            <i class="fa-solid fa-bars"></i>
        </div>
		<div class="sidebar desktop">
            <span></span>
            <!-- <img src="images/logo.png" alt=""> -->
			<nav class="sidebar_menu">
				<button class="active">
					<span>
						<a href="index.php"><i class="fa-solid fa-house"></i>
						<span>Home</span></a>
					</span>
				</button>
				<button>
					<span>
						<a href=""><i class="fa-sharp fa-solid fa-calendar"></i>
						<span>News and Event</span></a>
					</span>
				</button>
				<button>
					<span>
						<a href="sponsor.php"><i class="fa-sharp fa-solid fa-handshake-simple"></i>
						<span>Our Sponsor</span></a>
					</span>
				</button>
				<button>
					<span>
						<a href="candidate_list.php"><i class="fa-sharp fa-solid fa-user"></i>
						<span>Official Candidate</span></a>
					</span>
				</button>
				<button>
					<span>
						<a href="about.php"><i class="fa-sharp fa-solid fa-globe"></i>
						<span>About Us</span></a>
					</span>
				</button>   
			</nav>
		</div>
		
		<div class="wrapper head">
			<div class="title">
				<h1>MISTER GRAND PHILIPPINES 2022</h1>
				<h2>WE ARE MISTERGRAND. WE ARE NUMBER 1</h2>
			</div>
			<div class="group-image-wrapper">
				<div class="image-wrapper">
					<div class="image-container" data-index ="3" >
						<img src="images/mgp 2021-1.png" alt="" loading="lazy">
						<!-- <span>candidate name</span> -->
					</div>

					<div class="image-container" data-index ="1" >
						<img src="images/mgp 2018-2.png" alt="" loading="lazy">
						<!-- <span>MISTERGRAND 2018</span> -->
					</div>
					<div class="image-container" data-index ="2" >
						<img src="images/mgp 2019-1.png" alt="" loading="lazy">
						<!-- <span>candidate name</span> -->
					</div>
					<div class="image-container" data-index ="0" >
						<img src="images/mgp 2018-1.png" alt="" loading="lazy">
						<!-- <span>MISTERGRAND 2018</span> -->
					</div>
					<div class="image-container" data-index ="4" >
						<img src="images/mgp 2022-1.png" alt="" loading="lazy">
						<!-- <span>candidate name</span> -->
					</div>	
				</div>
				<div class="circle"></div>
			</div>
		</div>
		
		<div>

			<section>
				<h1>WHO WILL BE THE NEXT MISTERGRAND PHILIPPINES 2023 ? </h1>
			</section>
			<div class="wrapper">
				<div class="container">
				  <div class="slider">
					<input type="radio" name="testimonial" id="t-1">
					<input type="radio" name="testimonial" id="t-2">
					<input type="radio" name="testimonial" id="t-3" checked>
					<input type="radio" name="testimonial" id="t-4">
					<input type="radio" name="testimonial" id="t-5">
					<div class="testimonials">
					  <label class="item" for="t-1">
						<!-- <img src="images/prevWinners/frame_design2.png" alt=""> -->
						<div class="itemContainer">
						  <img src="images/prevWinners/mgp 2018-1.png" alt="picture" loading="lazy">
						  <img src="images/prevWinners/winner_bg.jpg" class="bg" alt="picture" loading="lazy">
						  <img src="images/prevWinners/crown.png" class="crown" alt="picture" loading="lazy">
						  <div class="info">
							<h2>JOSHUA REGINALD</h2>
							<h3>MISTER GRAND PHILIPPINES 2017</h3>
							<img src="images/prevWinners/frame_design.png" class="frame" alt="" loading="lazy">
						  </div>
						</div>
					  </label>
					  <label class="item" for="t-2">
						<div class="itemContainer">
						  <img src="images/prevWinners/mgp 2018-2.png" alt="picture" loading="lazy">
						  <img src="images/prevWinners/winner_bg.jpg" class="bg" alt="picture" loading="lazy">
						  <img src="images/prevWinners/crown.png" class="crown" alt="picture" loading="lazy">
						   <div class="info">
						  <h2>DAVID SIMON REYES</h2>
						  <h3>MISTER GRAND PHILIPPINES 2018</h3>
							<img src="images/prevWinners/frame_design.png" class="frame" alt="" loading="lazy">
						</div>
						</div> 
					  </label>
					  <label class="item" for="t-3">
						<div class="itemContainer">
						  <img src="images/prevWinners/mgp 2022-1.png" alt="picture" loading="lazy">
						  <img src="images/prevWinners/winner_bg.jpg" class="bg" alt="picture" loading="lazy">
						  <img src="images/prevWinners/crown.png" class="crown" alt="picture" loading="lazy">
						   <div class="info">
						  <h2>KRISTZAN DELOS SANTOS</h2>
						  <h3>MISTER GRAND PHILIPPINES 2022</h3>
							<img src="images/prevWinners/frame_design.png" class="frame" alt="" loading="lazy">
						</div>
						</div>
					  </label>
					  <label class="item" for="t-4">
						<div class="itemContainer">
						  <img src="images/prevWinners/mgp 2021-1.png" alt="picture" loading="lazy">
						  <img src="images/prevWinners/winner_bg.jpg" class="bg" alt="picture" loading="lazy">
						  <img src="images/prevWinners/crown.png" class="crown" alt="picture" loading="lazy">
						   <div class="info">
						  <h2>MICHAEL VER COMALING</h2>
						  <h3>MISTER GRAND PHILIPPINES 2021</h3>
							<img src="images/prevWinners/frame_design.png" class="frame" alt="" loading="lazy">
						</div>
						</div>
					  </label>
					  <label class="item" for="t-5">
						<div class="itemContainer">
						  <img src="images/prevWinners/mgp 2019-1.png" alt="picture" loading="lazy">
						  <img src="images/prevWinners/winner_bg.jpg" class="bg" alt="picture" loading="lazy">
						  <img src="images/prevWinners/crown.png" class="crown" alt="picture" loading="lazy">
						   <div class="info">
						  <h2>PAOLO GILLARDO</h2>
						  <h3>MISTER GRAND PHILIPPINES 2019</h3>
							<img src="images/prevWinners/frame_design.png" class="frame" alt="" loading="lazy">
						</div>
						</div>
					  </label>
					</div>
					<div class="Sliderdots">
					  <label for="t-1"></label>
					  <label for="t-2"></label>
					  <label for="t-3"></label>
					  <label for="t-4"></label>
					  <label for="t-5"></label>
					</div>
				  </div>
				</div>
			  </div>
			<section>
				<p>Watch the <b>Post Live</b> of the finale to see how the candidate proved theirselves being worthy to be crowned and be the next Mister Grand Philippine.</p>
				<p>Visit our Youtube Channel <span><i class="fa-brands fa-youtube"></i></span></p>
				<a href="https://www.youtube.com/watch?v=OW6ev1_5f6c&t=36s" target="_blank">https://www.youtube.com/watch?v=OW6ev1_5f6c&t=36s</a>
				<div class="video-container">
					<iframe id="ytVideo" width="853" height="480" src="https://www.youtube.com/embed/1bfhoTsAbDM?autoplay=1" title="Mister Grand Philippines 2022 Grand Finale Winford Manila Resort and Casino Grand Ballroom" frameborder="0" allow="accelerometer;" allowfullscreen  ></iframe>
				</div>
			</section>
			<section class="d-grid" data-carousel>
				<div class="header">
					<h2>TOP 10 <br/> CANDIDATE</h2>
					<div class="line"></div>
				</div>
				
				<div class="buttons">
					<div class="back button" data-carousel-button= "prev"><i class="fa-sharp fa-solid fa-chevron-left"></i></div>
					<div class="next button" data-carousel-button= "next"><i class="fa-sharp fa-solid fa-chevron-right"></i></div>
				</div>
				
				<div class="candidate-wrapper d-grid" data-slides>
					<div class="candidate-container choices" data-active name="absalud" fullname="RONNIEL ABSALUD" province="TARLAC CITY" data-index="0" data-status="active">
						<img src="images/top 10-2022/absolud.jpg"  alt="" loading="lazy">
						<h1>RONNIEL ASALUBD</h1>
					</div>
					<div class="candidate-container choices" name="caringal" fullname="VINCENT CARINGAL" province="QUEZON CITY" data-index="1" data-status="unknown">
						<img src="images/top 10-2022/Caringal.jpg"  alt="" loading="lazy">
						<h1>VINCENT MARK CARINGAL</h1>
					</div>
					<div class="candidate-container choices" name="delos_santos"  fullname = "KRISTZAN DELOS SANTOS" province="CAVITE" data-index="2" data-status="unknown">
						<img src="images/top 10-2022/Delos_Santos.jpg" alt="" loading="lazy">
						<h1>KRISTZAN KARLO DELOS SANTOS</h1>
					</div>
					<div class="candidate-container choices" name="finney" fullname="JOEREN KING FINNEY" province="NEGROS ORIENTAL" data-index="3" data-status="unknown">
						<img src="images/top 10-2022/Finney.jpg"  alt="" loading="lazy">
						<h1>JOEREN KING FINNEY</h1>
					</div>
					<div class="candidate-container choices" name="kashya" fullname="RIRRUCHAM KASHYAP" province="BATANGAS CITY" data-index="4" data-status="unknown">
						<img src="images/top 10-2022/Kashyap.jpg" alt="" loading="lazy">
						<h1>RIRRUCHAM KASHYAP</h1>
					</div>
					<div class="candidate-container choices" name="lopez" fullname="MELVIN LOPEZ" province="LAGUNA CITY" data-index="5" data-status="unknown">
						<img src="images/top 10-2022/lopez.jpg"  alt="" loading="lazy">
						<h1>MELVIN LOPEZ</h1>
					</div>
					<div class="candidate-container choices" name="manalang" fullname="JHASPER MANALANG" province="ZAMBALES CITY" data-index="6" data-status="unknown">
						<img src="images/top 10-2022/Manalang.jpg"  alt="" loading="lazy">
						<h1>JHASPER MANALANG</h1>
					</div>
					<div class="candidate-container choices" name="roque" fullname="JUSTINE ROQUE" province="PAMPANGA CITY" data-index="7" data-status="unknown">
						<img src="images/top 10-2022/roque.jpg"  alt="" loading="lazy">
						<h1>JUSTINE ROQUE</h1>
					</div>
					<div class="candidate-container choices" name="edcel" fullname="EDCEL SANCIO" province="ILOILO PROVINCE" data-index="8" data-status="unknown">
						<img src="images/top 10-2022/sancio.jpg"  alt="" loading="lazy">
						<h1>EDCEL SANCIO</h1>
					</div>
					<div class="candidate-container choices" name="villapando" fullname="JEROME VILLAPANDO" province="GUIGUINTO, BULACAN" data-index="9" data-status="unknown">
						<img src="images/top 10-2022/Villapando.jpg" alt="" loading="lazy">
						<h1>JEROME VILLAPANDO</h1>
					</div>
				</div>
			</section>

			<section id="contact-container">
				<div class="popup-container">
					<div class="wrapper card-container" >
					<span class="close"><i class="fa-sharp fa-solid fa-xmark"></i></span>
					<img src="images/logo.png" alt="" loading="lazy">
					<span class="message" data-status="success"><i class="fa-sharp fa-solid fa-circle-exclamation"></i>Thank You!!</span>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sunt corrupti illum sapiente tempore.</p>
					</div>
				</div>		
				<!-- <button class="wrapper container testing">slide in</button> -->
				<div class="contact-container">
					<div class="info">
						<h1>GET IN TOUCH</h1>
					<span>Interested to join ? For any inquiries you can send us a message here and we will respond shortly.</span>
				</div>
				<center><span id="validation"></span></center>
					<form action="">
							<div>
								<label for="#email">Email <span style="color:var(--color-border-focus)">*</span></label>
								<input type="email" name="email" id="email" class="input" placeholder="Please enter your Email..." required>
							</div>
							<div>
								<label for="#name">Name <span style="color:var(--color-border-focus)">*</span></label>
								<input class="input" type="text" name="name" id="name"  placeholder="Please enter your Name..." required>
							</div>
							<textarea name="inquery" id="inquiry" class="input" cols="30" rows="10" placeholder="Please enter your concern here..."></textarea>
							<span><button class="submit" id="submit">SUBMIT</button></span>
					</form>
				</div>
			</section>
			<footer class="wrapper">
				<ul>
				  <li><span>LOCATION</span><br>
					Room 510, West City Plaza Bldg. West Ave, Brgy. West Triangle, Quezon City
				  </li>
				  <li><span>PHONE</span><br>
					(63)992 370 7312
				  </li>
				  <li><span>EMAIL</span><br>
					mistergrandph@gmail.coms
				  </li>
				  <div class="socmed">
					<legend>SOCIAL MEDIA ACCOUNT</legend>
					<div>
					  <a href="https://twitter.com/MisterGrand_PH" class="twitter" target="_blank"><i class="fa-brands fa-twitter"></i>
					  <span class="tooltiptext">Twitter</span>
					</a>
					  <a href="https://www.facebook.com/MisterGrandPH" class="facebook" target="_blank"><i class="fa-brands fa-facebook"></i>
					  <span class="tooltiptext">Facebook</span>
					</a>
					  <a href="https://www.instagram.com/mistergrandph/" class="instagram" target="_blank"><i class="fa-brands fa-instagram"></i>
					  <span class="tooltiptext">Instagram</span>
					</a>
					  <a href="#" class="tiktok" target="_blank"><i class="fa-brands fa-tiktok"></i>
					  <span class="tooltiptext">Tiktok</span>
					</a>
					  <a href="https://www.youtube.com/channel/UCTWv2aOfk6va8q3PP5bjkZw" class="youtube" target="_blank"><i class="fa-brands fa-youtube"></i>
					  <span class="tooltiptext">Youtube</span>
					</a>
					</div>
				  </div>
				  <div>MISTER GRAND PHILIPPINES @2022 ALL RIGHT RESERVED.</div>        
				</ul>
			  </footer>
    </body>
</html>
