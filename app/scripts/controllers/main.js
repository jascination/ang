'use strict';

var sort_by;

(function() {
    // utility functions
    var default_cmp = function(a, b) {
            if (a == b) return 0;
            return a < b ? -1 : 1;
        },
        getCmpFunc = function(primer, reverse) {
            var dfc = default_cmp, // closer in scope
                cmp = default_cmp;
            if (primer) {
                cmp = function(a, b) {
                    return dfc(primer(a), primer(b));
                };
            }
            if (reverse) {
                return function(a, b) {
                    return -1 * cmp(a, b);
                };
            }
            return cmp;
        };

    // actual implementation
    sort_by = function() {
        var fields = [],
            n_fields = arguments.length,
            field, name, reverse, cmp;

        // preprocess sorting options
        for (var i = 0; i < n_fields; i++) {
            field = arguments[i];
            if (typeof field === 'string') {
                name = field;
                cmp = default_cmp;
            }
            else {
                name = field.name;
                cmp = getCmpFunc(field.primer, field.reverse);
            }
            fields.push({
                name: name,
                cmp: cmp
            });
        }

        // final comparison function
        return function(A, B) {
            var a, b, name, result;
            for (var i = 0; i < n_fields; i++) {
                result = 0;
                field = fields[i];
                name = field.name;

                result = field.cmp(A[name], B[name]);
                if (result !== 0) break;
            }
            return result;
        }
    }
}());

var dom = ['bitsandpieces.net.au', 'yearntolearn.com.au', 'designedbylife.com.au', 'whereintheworldkp.com', 'thechangestarter.com', 'thewhiteagency.com.au', 'holler.com.au', 'deskspace.com.au', 'mahlabmedia.com.au', 'datarati.com.au', 'adinajozsef.com.au', 'curvychictours.com', 'totalsynergy.com', 'object.com.au', 'extrablack.com.au', 'mca.com.au', 'mi9.com.au', 'stemonline.com.au', 'sydneylivingmuseums.com.au', 'fadedempire.com.au', 'thecooksgrocer.com.au', 'wasamedia.com', 'drawingbook.com.au', 'funkis.com', 'watsonsbayhotel.com.au', 'alasthelabel.com', 'intersect.org.au', 'hcl.com', 'brianritchie.me', 'livewiremarkets.com', 'milnealexander.com.au', 'hflawyers.com.au', 'culturalchameleon.com.au', 'charliedehaas.com.au', 'anmm.gov.au', 'solzhouseshoes.com', 'originagency.com.au', 'theunspokenpitch.com', 'goodsams.org.au', 'redandblackzone.com', 'savvyconsulting.com.au', 'myrefinery.com.au', 'samanthaball.com.au', 'tapaas.com', 'retail-x.com.au', 'thefolk.com', 'screenmyshorts.com', 'nbnco.com.au', 'bby.com.au', 'macrovue.com.au', 'epa.nsw.gov.au', 'saramoss.com.au', 'pulsemining.com.au', 'lunchladylou.com', 'wearesocial.net', 'inceptiondigital.com.au', 'tivoli2moro.com', 'mashable.com', 'ourgoldenage.com.au', 'alfiesfriendrolfe.com.au', 'retailoasis.com', 'cooeeart.com.au', 'zeusunwired.com', 'perceptionz.net', 'prezitraining.com.au', 'traction-digital.com', 'lafitte.com.au', '84thand3rd.com', 'lgnsw.org.au', 'monkeybaa.com.au', 'nordicfusion.com.au', 'edgecustom.com.au', 'planetfurniture.com.au', 'dearinassociates.com', 'monpetitchou.com.au', 'bellpotter.com.au', 'clothfabric.com', 'manofmany.com', 'incubate.org.au', 'nortonrosefulbright.com', 'mensard.com', '8vamarketing.com.au', 'photodoco.com', 'riskresponse.com.au', 'wholesome-cook.com', 'meetoo.com.au', 'thebeautyoflife.com.au', 'fluffyjack.com', 'kaleidoscopeblog.net', 'taybenlor.com', 'alexn.id.au', 'zomt.com.au', 'notoxbox.com.au', 'theloverlist.com', 'autumnproducts.com.au', 'zefyrjewels.com.au', 'suprios.com', 'dynamic4.com', 'lachstock.com.au', 'ifyoubuildit.com.au', 'nikigudex.com', 'golflink.com.au', 'zakrzewski.com.au', 'mapwheel.com', 'arbonpublishing.com', 'worldacademy.tv', 'redcross.org.au', 'chada.com.au', 'aboutmybrain.com', 'darkcloudsilver.com', 'surferliving.com', 'percept.com.au', 'razorfish.com.au', 'benevolent.org.au', 'mysticmedusa.com', 'thecopycollective.com', 'metroscreen.org.au', 'and-sydney.com', 'wholesale-blank-tshirts.com.au', 'metal-roos.com.au', 'setmyscene.com', 'liveintheprojects.com', 'miaudio.com', 'interactiveideas.com.au', 'vstarbliss.com', 'thesparkinside.com', 'createordie.com.au', 'einterviewquestionsandanswers.com', 'hsf.com', 'personalisedfavours.com.au', 'onlinemarketingworks.com.au', 'getfancied.com', 'defence.gov.au', 'ss48.org', 'hri.org.au', 'andrewmaccoll.com', 'servantofchaos.com', 'canfixit.com.au', 'modavanti.com', 'visual.ly', 'petsearch.com.au', 'mattsharpe.com', 'jasonmcdermott.net', 'ppfinders.com.au', 'aatkings.com.au', 'banarra.com', 'pushstart.com.au', 'blueprintsolutionsgroup.com', 'passionforlife.com.au', 'sustainablebm.com.au', 'storyberg.com', 'artbuds.com', 'hassellstudio.com', 'stgeorgegraphics.com.au', 'richardsison.com', 'blacklemag.com', 'bain.com', 'broadreachservices.com', 'frankteam.com.au', 'ice.org.au', 'sbs.com.au', 'britishcouncil.org.au', 'bohemiagroup.com.au', 'spicyicecream.com.au', 'sharethemess.com', 'seanasmith.com', 'joinwoo.com.au', '2datafish.com.au', 'creditorwatch.com.au', 'waywardson.com.au', 'mitchellake.com', 'yourtutor.com.au', 'propellher.com', 'inlite.com.au', 'intersective.com', 'sambag.com.au', 'bauer-media.com.au', 'theurbanmum.com.au', 'lawpath.com.au', 'valmont.com.au', 'sacs.nsw.edu.au', 'pega.com', 'emilyvalentine.com.au', 'redbubble.com', 'sturt.nsw.edu.au', 'spacefurniture.com.au', 'agfarm.com.au', 'winemarket.com.au', 'mantragroup.com.au', 'purestorage.com', 'tksg.com.au', 'koukii.com.au', 'done.com.au', 'burtonmetaldepository.com', 'campaignmonitor.com', 'exacttarget.com', 'lonsec.com.au', '1am.co.nz', 'cancer.org.au', 'brookealexander.com.au', 'cataloguemagazine.com.au', 'hartldn.com', 'gothat.com', 'cassette.com.au', 'walkleys.com', 'sassandbide.com', 'stylerunner.com', 'gooddaygirl.com.au', 'dreaminternship.com.au', 'driveaway.com.au', 'thebookkitchen.com.au', 'thecorporatekid.com.au', 'saxton.com.au', 'rbgsyd.nsw.gov.au', 'travelctm.com', 'melon.com.au', 'irresistiblelearning.com.au', 'lomahstudios.com', 'theiconic.com.au', 'nelga.com', 'pria.com.au', 'dlux.org.au', 'thepositivityinstitute.com.au', 'careerone.com.au', 'jets.com.au', 'marxgrocer.com.au', 'elitistcode.com', 'atlassian.com', 'vclass.com.au', 'iconpark.com', 'scribbleandthink.com', 'muru-d.com', 'planning.nsw.gov.au', 'transfieldservices.com', 'cirrusmedia.com.au', 'ato.gov.au', 'allens.com.au', 'instrument-works.com', 'amantalwar.com', 'bassike.com', 'intermediaconsulting.com.au', 'employmentinnovations.com', 'nannyshecando.com', 'citrix.com', 'nswcc.org.au', 'steptwo.com.au', 'goodman.com', 'wellmovement.com', 'wealthyandwise.com.au', 'presentationstudio.com', 'fotomerchant.com', 'umusic.com', 'stjohnnsw.com.au', 'metail.co.uk', 'elefanttraks.com', 'lush.com.au', 'aiad.com.au', 'confidentliar.com', 'moshtix.com.au', 'wildbushluxury.com', 'equilibriumdesign.com.au', 'wisekangaroo.com', 'moneysoft.com.au', 'thisismango.com.au', 'positionrealty.com.au', 'thoughtspace.com.au', 'stageandscreen.com.au', 'thesaltbox.com.au', 'businessinsider.com.au', 'helpling.com', 'campaignbug.com', 'venturecrowd.com.au', 'sproutinggood.com.au', 'tradeignite.com', 'eatfitfood.com.au', 'clintsalter.com', 'reinteractive.net', 'hypedc.com', 'slingshotters.com', 'sweetdreamsdesigns.com', 'computer.org', 'a-positive.com.au', 'hellobookcase.org', 'grahamlea.com', 'sweetstyle.com.au', 'musicaviva.com.au', 'mrplates.com', 'volunteering.com.au', 'reactive.com', 'joebutton.com', 'tpf.com.au', 'esriaustralia.com.au', 'matterdesign.com.au', 'mattt.com.au', 'bullseye-digital.com', 'gadgets4geeks.com.au', 'plchardware.com.au', 'georgetown.edu', 'amsrs.com.au', 'deepspace.com.au', 'cartercarter.com.au', 'mobile-eye-clinic.com', 'tripadvisor.com', 'parkmyvan.com.au', 'itwire.com', 'stimulus.com.au', 'rawideas.com', 'fionacarter.com', 'driva.com.au', 'flash.com.au', 'nari525.net', 'qlc.io', 'insatiablemunchies.com', 'goodfuel.co', 'landor.com', 'livingedge.com.au', 'mastermindconsulting.com.au', 'aerios.com.au', 'focalattractions.com.au', 'dius.com.au', 'monpurse.com', 'benchpr.com.au', 'brabhamgroup.com', 'rippleffectgroup.com', '3rdsense.com', 'zenithoptimedia.com.au', '89n.com', 'webwise.com.au', 'williamdejean.com', 'arc.unsw.edu.au', 'franklinwomen.com.au', 'mychoicematters.org.au', 'u1group.com', 'futurespace.com.au', 'viocorp.com', 'littlefrenchy.com.au', 'elements.net.au', 'becfaye.com.au', 'uncommonground.com.au', 'workable.com', 'trade.gov', 'thesoundalliance.net', 'pabloandrustys.com.au', 'hudsonmeats.com', 'backseat.me', 'pollenizer.com', 'hallchadwick.com.au', 'promiseorpay.com', 'cuttawayhillwines.com.au', 'tallboysapparel.com', 'soska.com.au', 'swoon.com.au', 'mybespokechair.com', 'ccccnsw.org.au', 'bilue.com.au', 'scopemedia.com.au', 'rga.com', 'klick.com.au', 'lightingmatters.com.au', 'futureburo.com', 'dublin.com', 'worldtradeadvisors.com', 'adshel.com.au', 'blunt-instrument.com', 'liveschool.net', 'icur.com.au', 'jevonsglobal.com', 'dinosaurdistrict.com.au', 'harrycourt.com', 'thekindergroup.com', 'cyborg.net.au', 'fishburners.org', 'agentbox.com.au', 'digicomms.com.au', 'luisabustos.com', 'inscopemedia.com', 'kidsatswitch.com.au', 'getreadingright.com', 'account-master.com', 'mwebsolutions.com.au', 'original-unverpackt.de', 'someplace.com.au', 'omnisoftware.com.au', 'mapdataservices.com', 'brandnewmedia.com.au', 'recruitloop.com', 'marketingjuice.com.au', 'fromlittlethings.co', 'clubbultaco.com.au', 'thevirtualassistant.com.au', 'doctours.com.au', 'starlight.org.au', 'analogfolk.com', 'orchard.com.au', 'choice.com.au', 'vermilian.com', 'fitnessnetwork.com.au', 'marketboomer.com', 'piip.org.au', 'innuendoadvertising.com.au', 'boiledeggsandsoldiers.com', 'barnabyshop.com', 'sizmek.com', 'news.com.au', 'thoughtworks.com', 'dmg.com.au', 'abc.net.au', 'cityofsydney.nsw.gov.au', 'unicef.org.au', 'sparkk.com.au', 'dizenya.com.au', 'lovesdata.com', 'thefarmdigital.com', 'ecooutdoor.com.au', 'cd.com.au', 'lindatahija.com', 'iquitsugar.com', 'gbca.org.au', 'h2coconut.com', 'woollahra.nsw.gov.au', 'fleetplus.com.au', 'undergroupshowroom.com', 'swaab.com.au', 'resolutionmedia.com', 'sklawyers.com.au', 'analogfolk.com.au', 'frankdigital.com.au', 'lavender.ad', 'persistentsys.com', 'thegrindhouse.com', 'getvero.com', 'starz.com', 'crowdsourcehire.com', 'adinahotels.com.au', 'reborn.com.au', 'eq.com.au', 'linkshare.com', 'fourteendigital.com.au', 'pwnetwork.com.au', 'possumdigital.com.au', 'newtonsnerds.com', 'practiceignition.com', 'inmobi.com', 'hilton.com', 'consumeraffairs.com', 'northcott.com.au', 'siroccohome.com.au', 'ppca.com.au', 'cambridgehotel.com.au', 'concreteplayground.com.au', 'racp.edu.au', 'bloch.com.au', 'circul8.com.au', 'activehealthtech.com', 'justsnacks.com.au', 'realresultsmedia.com.au', 'hotshotsactionevents.com', 'jaswealth.com.au', 'verbate.co', 'fox.com', 'kadocreative.com', 'opencolleges.edu.au', 'miamiadschool.com', 'voxroxmedia.com', 'jmc.edu.au', 'zookal.com', 'apnoutdoor.com.au', 'snissan.me', 'skillsapien.com', 'baileystreetdesign.com.au', 'orangebicycle.com.au', 'yourmodern.co', 'cellarmasters.com.au', 'engagesciences.com', 'viewsontop.com', 'dnsw.com.au', 'ssw.com.au', 'thewebshowroom.com.au', 'buzzfeed.com', 'marsh.com', 'ozforex.com.au', 'trainingaidaustralia.com.au', 'mccartneydesign.com.au', 'presentationstudio.com.au', 'momento.com.au', 'hotcourses.com.au', 'zdnet.com.au', 'moomumedia.com', 'webknowledgy.com.au', 'joelspencerdesign.com', 'stamfordinteractive.com.au', 'dernovotny.com', 'mooretechnology.com.au', 'grays.com.au', 'biblesociety.org.au', 'hubaustralia.com', 'theappvillage.com', 'ozharvest.org', 'kids.nsw.gov.au', 'sponsorshipnews.com.au', 'publicismojo.com.au', 'lalalandshop.com.au', 'tenthhouse.com.au', 'yourhomeawayfromhome.com.au', 'utsmotorsports.com', 'australiandiabetescouncil.com', 'enterprise-ireland.com', 'ibest.com.br', 'loveblackdresses.com.au', 'novuscapital.com.au', 'mrandmrsamos.com', 'fusionbooks.com', 'contactability.com.au', 'jewishcare.com.au', 'in.tum.de', 'commercialisationaustralia.gov.au', 'oragroup.com.au', 'griffith.edu.au', 'elsevier.com', 'clintonpower.com.au', 'besydney.com.au', 'nps.org.au', 'colourblocker.com', 'magnoliasolutions.com.au', 'viparo.com.au', 'pleezpay.com', 'saymac.com', 'phanig.com', 'codoc.org', 'dexus.com', 'circuitclub.com.au', 'asx.com.au', 'cubisteffects.com', 'startupyard.cz', 'alderip.com.au', 'harleyjohnston.com', 'chrisharold.com', 'apcgenius.com', 'neboengineering.com.au', 'smokeball.com', 'firstclickconsulting.com', 'acpmagazines.com.au', 'alkhabeer.com', 'wagen.com.au', 'findpoker.com.au', 'olsenorringe.com', 'anchor.com.au', 'contexti.com', 'icssydney.com', 'ambition.com.au', 'duomo.com.au', 'razorfishhealthware.com.au', 'helenkaminski.com', 'acya.org.au', 'medobs.com.au', 'the-hub.net', 'ccia.org.au', 'lx-group.com.au', 'austrade.gov.au', 'kdigital.com.au', 'conciergeconnections.com.au', 'iflyflat.com.au', 'caradvice.com.au', 'homedesigndirectory.com.au', 'collaborativeconsumption.com', 'thefetch.org', 'andy.me', 'aussiewinetv.com', 'xoox.com.au', 'salesforce.com', 'urbanwalkabout.com', 'artfairsaustralia.com.au', 'directcouriers.com.au', 'irmau.com', 'amadeus.com', 'oracle.com', 'mynrma.com.au', 'okane.com.au', 'foogi.me', 'objectivedigital.com', 'servcorp.com.au', 'tapestry.net', 'brrmedia.com', 'accenture.com', 'btopenworld.com', 'vistaprint.com', 'lakerepublic.com', 'charteredaccountants.com.au', 'qantas.com.au', 'schneider-electric.com', 'ellaslist.com.au', 'newsdigitalmedia.com.au', 'feedbackloop.com.au', 'thefarmdigital.com.au', 'buyreply.com', 'maketonightcount.com', 'thefashionninja.com', 'ginevra.org', 'rodemic.com', 'oxfam.org.au', 'etsy.com', 'fourpillarsgin.com.au', 'ppbadvisory.com', 'tfehotels.com', 'handkrafted.com', 'zmail.unsw.edu.au', 'cloudsherpas.com', 'getup.org.au', 'shiztastic.com', 'myhealthjourney.com', 'digitalninjas.com', 'nettfunder.com', 'glamazonapp.com', 'rallydev.com', 'theguardian.com', 'redballoon.com.au', 'sydneyoperahouse.com', 'lead2work.com', 'write-here.org', 'australianbusiness.com.au', 'yourvirtualteam.biz', 'mypoppet.com.au', 'marais.com.au', 'theark.com.au', 'smartalechatters.com.au', 'melbournalia.com.au', 'cumulusinc.com.au', 'agoodman.com.au', 'missfox.com.au', 'sbpcreativemedia.com.au', 'bound-media.com', 'lamodiste.com.au', 'circulus.com.au', 'core-projects.com.au', 'generalstandards.co', 'igniteonline.com.au', 'peazie.com', 'on9systems.com', 'christiankimber.com', 'redbridgeweb.com.au', 'startupaus.org', 'dohertydesignstudio.com.au', 'rakumba.com.au', 'thirststudios.com', 'ygap.com.au', 'carlahackett.com', 'sussan.com.au', 'spinspin.com', 'kwslegal.com.au', 'bwired.com.au', 'planbuycook.com.au', 'keepcup.com.au', 'cassette.com.au', 'lauralarkin.com', 'loandbehold.com.au', 'littlebookroom.com.au', 'squareweave.com.au', 'nkngallery.com', 'sunglasshut.com.au', 'kazari.com.au', 'parentpaperwork.com', 'annexproducts.com', 'vifm.org', 'claiming.com.au', 'thestudiodreams.com', 'askalicestationery.com', 'nicoletattersall.com', 'theschooloflife.com.au', 'crowdspot.com.au', 'auspost.com.au', 'arkade.com.au', 'promotem.com.au', 'thecitylane.com', 'bigkidlittlekid.net', 'realkandy.com', 'meetoo.com.au', 'retaildirections.com', 'madgwicks.com.au', 'soulwellness.com.au', 'brightstar.net.au', 'cornwalls.com.au', 'yearntolearn.com.au', 'tgst.com.au', 'bared.com.au', 'goodbrew.com.au', 'hussal.com.au', 'kordamentha.com', 'weaveweb.com.au', 'doingsomethinggood.com.au', 'laytoncreative.com.au', 'macaronsbyjosephine.com.au', 'rightbraininsights.com', 'wilkinsandkent.com', 'reclaimedmelbourne.com.au', 'themesolutions.com.au', 'thedollhousexoxo.com.au', 'actf.com.au', 'digitales.com.au', 'aitsl.edu.au', 'marrinergroup.com.au', 'grantsolutions.com.au', 'jennycraig.com.au', 'hooroo.com', 'indietech.com.au', 'boroondara.vic.gov.au', 'glamodesign.com.au', 'movingdata.com', 'nbnco.com.au', 'becomeinvested.com.au', 'lindenarts.org', 'getqsic.com', 'crukew.com.au', 'fanhubmedia.com', 'nichollstechnologies.com', 'mifi.com.au', 'australianstyleinstitute.com.au', 'shomi.me', 'desseinfurniture.com', 'littlebit.com', 'neendreams.com', 'planetinnovation.com.au', 'touchinteractive.com.au', 'niche.com.au', 'kevinyank.com', 'assembleprojects.com.au', 'skyzone.com.au', 'creativeentrepreneur.com.au', 'synekamarketing.com.au', 'graceinteriordesigns.com.au', 'wordandweb.com.au', 'surfacedigital.com.au', 'caremonkey.com', 'smilingmind.com.au', 'uxmastery.com', 'cybersechub.com.au', 'mcclellandgallery.com', 'computer.org', 'bookworld.com.au', 'shaolinpunk.net', 'worldskills.org.au', 'coles.com.au', 'vsbc.vic.gov.au', 'mahercorp.com.au', 'reactive.com', 'cushlawhiting.com.au', 'melbournegirl.com.au', 'nuffnang.com.au', 'beautyholicsanonymous.com', 'privatemedia.com.au', 'backpackerdeals.com', 'nintex.com', 'ewb.org.au', 'trinity.unimelb.edu.au', 'melhotornot.com', 'bushheritage.org.au', 'wordnerds.com.au', 'thefashionsection.com', 'carsales.com.au', 'yourlifechoices.com.au', 'ibac.vic.gov.au', 'seeklearning.com.au', 'chrisyong.com', 'mitchellake.com', 'cleanenergycouncil.org.au', 'futuremusicgroup.com.au', 'habbotstudios.com', 'intrepidtravel.com', 'wittner.com.au', 'redbubble.com', 'crazy4jeans.com', 'revolvercreative.com.au', 'brownpaper.com.au', 'museum.vic.gov.au', 'mattt.com.au', 'jardan.com.au', 'neiyo.com', 'chapelstreet.com.au', 'safariliving.com', 'cocoflip.com.au', 'madman.com.au', 'sportsgirl.com.au', 'sportsbet.com.au', 'woman.com.au', 'visualimpactwebdesign.com.au', 'blocksglobal.com', 'gardenbeet.com', 'lordcoconut.com', 'im-c.com.au', 'lilfordsmith.com.au', 'artselect.com.au', 'studiothick.com', 'thewebprincess.com', 'drummondgolf.com', 'pmi.com', 'wommau.com', 'truck.net.au', 'careerone.com.au', 'peterwilson.cc', 'usethings.com.au', 'justdigitalpeople.com.au', 'andatech.com.au', 'nextdigital.com', 'wearetank.com.au', 'tweettweetfashion.com.au', 'acm.org', 'yacvic.org.au', 'hitnet.com.au', 'ahavic.com.au', 'bodycode.com.au', 'butterfly.com.au', 'strongintosuperb.com.au', 'schiavello.com', 'typo.com.au', 'unisuper.com.au', 'slv.vic.gov.au', 'tonybianco.com.au', 'tinyme.com', 'dairyaustralia.com.au', 'net-effects.com.au', 'cornerpresents.com.au', 'jumponweb.com.au', 'vocation.com.au', 'allens.com.au', 'stagelabel.com', 'huntingwithpixels.com.au', 'memorypie.com', 'mrcyclingworld.com.au', 'creativesuburbs.com.au', 'suityourstyle.com.au', 'mykeldixon.com', 'builderbids.com.au', 'thewordoperator.com.au', 'connecteducation.com.au', 'forethought.com.au', 'mckinnonsc.vic.edu.au', 'rea-group.com', 'pozible.com', 'eyeslicesaustralia.com.au', 'fh.com.au', 'etsy.com', 'maddocks.com.au', 'shopolla.com.au', 'oracle.com', 'ettitude.com.au', 'oxfam.org.au', 'care.org.au', 'urbanwalkabout.com', 'servcorp.com.au', 'crosstivity.com', 'hairhousewarehouse.com.au', 'aesop.com', 'nzte.govt.nz', 'twoodie.com', 'gidgetmedia.com.au', 'puppytales.com.au', 'hardiegrant.com.au', 'deakinprime.com', 'equiem.com.au', 'hiddensecretstours.com', 'benchpr.com.au', 'businesschic.com.au', 'yardguide.net', 'aist.asn.au', 'hendry.com.au', 'roundshegoes.com.au', 'robbandlulu.com', 'gewurzhaus.com.au', 'greatdanefurniture.com', 'rldstrategic.com', 'entrepot.com.au', 'dius.com.au', 'channeladvisor.com', 'wearedando.com', 'innovic.com.au', 'inspirationery.co', 'alternativewalkingtours.com.au', 'nowlearning.com.au', 'stolenpublications.com', 'lifewithbird.com', 'hudsonmeats.com', 'eventneeds.com.au', 'scaleinvestors.com.au', 'tri-alliance.com.au', 'estorereview.com.au', 'kinfolk.org.au', 'opentop.com', 'always-hungry.net', 'iproximity.net', 'codeworthy.com.au', 'brizk.com', 'ramonalindsay.com.au', 'registernow.com.au', 'ihearmotion.com', 'destinationmelbourne.com.au', 'wwf.org.au', 'vrc.net.au', 'inkandscreen.com.au', 'racing.com', 'thecarlton.com.au', 'coredna.com', 'spacecraftaustralia.com', 'mattirwin.com', 'vit.vic.edu.au', '3littlepenguins.com', 'ecooutdoor.com.au', 'news.com.au', 'thoughtworks.com', 'healthybusinessfinances.com.au', 'rothelowman.com.au', 'kingcontent.com.au', 'lartte.com.au', 'henrybucks.com.au', 'rightanglestudio.com.au', 'resdenim.com', 'uq.net.au', 'seanwalsh.net.au', 'greensteps.edu.au', 'melbournefoodexperiences.com.au', 'design100.com', 'phoenixphilms.com', 'startupsmart.com.au', 'kinnov.com', 'sixheads.com', 'purplecandor.com', 'nlpsuperfest.com', 'hubaustralia.com', 'casperlewis.com.au', 'digitalaction.com.au', 'coinjar.com', 'kalixhealth.com', 'accenture.com', 'aegisglobal.com', 'sensis.com.au', 'soledevotion.com.au', 'internmelbourne.com', 'talent2.com', 'myellow.com.au', 'melbourne.vic.gov.au'];




angular.module('angApp')
  .controller('MainCtrl', function ($scope, $http) {

  	$scope.chooseCity = function(city){

	    $http.get('scripts/' + city + '_attendees.json')
	       .then(function(res){

	       	$scope.totalDisplayed = 20;
	       	$scope.loadMore = function () {
			  $scope.totalDisplayed += 20;  
			};


	        var attendees = res.data[0]; 
	        $scope.order = [];               


	        $scope.companyShow = {};

	        var companyOrder = [];

	        Object.keys(attendees).forEach(function (company) {
				$scope.companyShow[company] = false;

				var cweCount = 0,
					eamCount = 0,
					mailCount = 0;



				Object.keys(attendees[company]).forEach(function (email) {
					eamCount++;

					for (var i = 0; i<attendees[company][email].length; i++){
						cweCount++;
					}
				});

				for (var i = 0; i<dom.length; i++){
					if (dom[i] === company){
						mailCount++;
					}
				}


				companyOrder.push({domain: company, cweCount: cweCount, eamCount: eamCount, mailCount: mailCount});
				
			});

	        companyOrder.sort(sort_by({name:'mailCount', primer: parseInt, reverse: true}, {name:'cweCount', primer: parseInt, reverse: true}));

			console.log('companyOrder', companyOrder);

			for (var i = 0; i<companyOrder.length; i++){

				$scope.order.push({domain: companyOrder[i].domain, mailCount: companyOrder[i].mailCount, eamCount: companyOrder[i].eamCount, cweCount: companyOrder[i].cweCount, emails: attendees[companyOrder[i].domain]});
			}

			console.log($scope.order);

	        $scope.chosen = true;
	    });
	};
  });

