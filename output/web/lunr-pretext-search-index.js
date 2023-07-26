var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   smakdonald.github   https:\/\/smakdonald.github.io\/index.html   copyright  "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "How to Use This Book (*)",
  "body": "How to Use This Book (*)  I'm still in the process of figuring out exactly what this is for.   Future lecture notes for the hopeful possibility that one day I am teaching a course over this material.    Current notes for students taking the first year algebra sequence.    Assistance in studying for the Algebra Qualifying Exam at UNL.    Clout.     Blocks    Definition  These are pretty standard and probably what you'd be expecting. The building blocks of what we'll be working with.   Examples  Specific instances of a definition.   Theorem  A result.   Lemma  A more technical result used specifically in the proof of a larger result.   Corollary  An important result whose proof comes directly from a previous theorem.   Proposition  Results that require proof but are more specific and\/or contained in a larger result coming later.   Exploration  Generalizations, specifics, smaller results, things are are less essential to the course or results who's proofs are usually skipped.   Problem  Used for qualifying exam problems.   Remark  Providing context in the form of foreshadowing or content not covered in this text. In general, there shouldn't be anything defined in a remark, they should be entirely optional.   Discussion  Usually for arguing about notation.   Context  Historical and etymogical origins.   Footnotes  Sometimes act like remarks. However, most are strictly for fun and add little to no educational value, at least in the traditional sense. It should really be feetnote if you think about it.       "
},
{
  "id": "p-6",
  "level": "2",
  "url": "preface-1.html#p-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition Examples Theorem Lemma Corollary Proposition Exploration Problem Remark Discussion Context Footnotes "
},
{
  "id": "section-topologies-open-sets",
  "level": "1",
  "url": "section-topologies-open-sets.html",
  "type": "Section",
  "number": "1.1",
  "title": "Topologies and Open Sets",
  "body": "Topologies and Open Sets  Topology   Suppose is a set. Then is a topology on if and only if is a collection of subsets of such that    ,     ,    if and , then , and    if is any collection of sets of , then .       Recall that the notation means the arbitrary union over a possibly uncountable index set .  Topological Space   A topological space is an ordered pair , where is a set and is a topology on .     The definition of a topological space arose from an abstraction of our familiar concepts of limits and continuity in Euclidean spaces.    Note that a set may admit many different topologies. Then and are different topological spaces if , even though the underlying set is the same.    We use the word space to mean topological space unless otherwise noted.  When it is clear what topology a space has, we will denote the space by .   Open Set   A set is called an open set in if and only if .     The properties of the sets in a topology were properties that were satisfied by the usual open sets of , hence the use of the term open .    It is customary to use the letters and to denote open sets.   We can think of a topology on as specifying what subsets of will be considered open.   Keep in mind that open sets are elements of the topology 𝒯 and subsets of the space . Elements of , on the other hand, are the points of the space .     Let be a finite collection of open sets in a topological space . Then is open.    Why does your proof not prove the false statement that the infinite intersection of open sets is necessarily open?  Characterization of Open Sets   A set is open in a topological space if and only if for every point , there exists an open set 𝑈𝑥 such that .    Neighborhood   We sometimes call an open set containing a neighborhood of .     Restating using the langauge of neighborhoods, we see a set is open if and only if every point has a neighborhood that lies within .   Topologies     Indiscrete topology on a set .    Discrete topology on a set the set of all subsets of .    Euclidean topology on ℝn: 𝒯Eucl := {U ⊆ ℝ | for all p ∈ U there is an r > 0 and q ∈ ℝn such that p ∈ B(q,r) ⊆ U }, where B(q,r) = Bn(q,r) := {x ∈ ℝn | dEucl(q,x) < r} is the ball of radius r centered at q (and dEucl is Euclidean distance).    Euclidean topology relative to a subset X ⊆ ℝn: 𝒯Eucl sub := {U ∩ X | U ⊆ ℝn and U is in 𝒯Eucl}.    Finite complement topology on a set X: 𝒯fc := {U ⊆ X | X - U is a finite set} ∪ {∅}.    Included point topology on a set X with included point a ∈ X: 𝒯incl := {U ⊆ X | a ∈ U} ∪ {∅}.    Excluded point topology on a set X with excluded point a ∈ X: 𝒯excl := {U ⊆ X | a ∉ U} ∪ {X}.    Infinite ray topology on ℝ: 𝒯ray := { (-∞,a) | a ∈ ℝ} ∪ {∅,ℝ}.    Preimage topology constructed on a set X from a function f:X → Y and a topology 𝒯Y on Y: 𝒯f := {f-1(U) | U ∈ 𝒯Y}.    Line with two origins with set (ℝ - {0}) ∪ {*,@} and topology 𝒯 := {U | U ⊆ ℝ,- {0} and U ∈ 𝒯Eucl} ∪ {(U - {0}) ∪ {*} | U ⊆ ℝ, 0 ∈ U, and U ∈ 𝒯Eucl} ∪ {(U - {0}) ∪ {@} | U ⊆ ℝ, 0 ∈ U, and U ∈ 𝒯Eucl} ∪ {(U - {0}) ∪ {*,@} | U ⊆ ℝ, 0 ∈ U, and U ∈ 𝒯Eucl}.    On the finite set X = {a,b,c}: 𝒯 = { ∅, {a}, {a,b}, {a,c}, X}.      Coarser, Finer   Let 𝒯 and 𝒯' be topologies on a set X. If 𝒯 ⊆ 𝒯, then the topology 𝒯 is called smaller or coarser than 𝒯', and the topology 𝒯' is called larger or finer than 𝒯.     These are sometimes called smaller and larger, but that can be misleading.   "
},
{
  "id": "def-topology",
  "level": "2",
  "url": "section-topologies-open-sets.html#def-topology",
  "type": "Definition",
  "number": "1.1",
  "title": "Topology.",
  "body": "Topology   Suppose is a set. Then is a topology on if and only if is a collection of subsets of such that    ,     ,    if and , then , and    if is any collection of sets of , then .      "
},
{
  "id": "def-topological-space",
  "level": "2",
  "url": "section-topologies-open-sets.html#def-topological-space",
  "type": "Definition",
  "number": "1.2",
  "title": "Topological Space.",
  "body": "Topological Space   A topological space is an ordered pair , where is a set and is a topology on .   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "section-topologies-open-sets.html#remark-1",
  "type": "Remark",
  "number": "1.3",
  "title": "",
  "body": " Note that a set may admit many different topologies. Then and are different topological spaces if , even though the underlying set is the same.  "
},
{
  "id": "convention-1",
  "level": "2",
  "url": "section-topologies-open-sets.html#convention-1",
  "type": "Convention",
  "number": "1.4",
  "title": "",
  "body": " We use the word space to mean topological space unless otherwise noted.  When it is clear what topology a space has, we will denote the space by .  "
},
{
  "id": "def-open-set",
  "level": "2",
  "url": "section-topologies-open-sets.html#def-open-set",
  "type": "Definition",
  "number": "1.5",
  "title": "Open Set.",
  "body": "Open Set   A set is called an open set in if and only if .   "
},
{
  "id": "convention-2",
  "level": "2",
  "url": "section-topologies-open-sets.html#convention-2",
  "type": "Convention",
  "number": "1.6",
  "title": "",
  "body": " It is customary to use the letters and to denote open sets.  "
},
{
  "id": "warning-1",
  "level": "2",
  "url": "section-topologies-open-sets.html#warning-1",
  "type": "Warning",
  "number": "1.7",
  "title": "",
  "body": " Keep in mind that open sets are elements of the topology 𝒯 and subsets of the space . Elements of , on the other hand, are the points of the space .  "
},
{
  "id": "thm-finite-union-intersection",
  "level": "2",
  "url": "section-topologies-open-sets.html#thm-finite-union-intersection",
  "type": "Theorem",
  "number": "1.8",
  "title": "",
  "body": "  Let be a finite collection of open sets in a topological space . Then is open.   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-topologies-open-sets.html#exercise-1",
  "type": "Exploration",
  "number": "1.9",
  "title": "",
  "body": "Why does your proof not prove the false statement that the infinite intersection of open sets is necessarily open? "
},
{
  "id": "thm-open-characterization",
  "level": "2",
  "url": "section-topologies-open-sets.html#thm-open-characterization",
  "type": "Theorem",
  "number": "1.10",
  "title": "Characterization of Open Sets.",
  "body": "Characterization of Open Sets   A set is open in a topological space if and only if for every point , there exists an open set 𝑈𝑥 such that .   "
},
{
  "id": "def-neighborhood",
  "level": "2",
  "url": "section-topologies-open-sets.html#def-neighborhood",
  "type": "Definition",
  "number": "1.11",
  "title": "Neighborhood.",
  "body": "Neighborhood   We sometimes call an open set containing a neighborhood of .   "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "section-topologies-open-sets.html#remark-2",
  "type": "Remark",
  "number": "1.12",
  "title": "",
  "body": " Restating using the langauge of neighborhoods, we see a set is open if and only if every point has a neighborhood that lies within .  "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-topologies-open-sets.html#example-1",
  "type": "Example",
  "number": "1.13",
  "title": "Topologies.",
  "body": "Topologies     Indiscrete topology on a set .    Discrete topology on a set the set of all subsets of .    Euclidean topology on ℝn: 𝒯Eucl := {U ⊆ ℝ | for all p ∈ U there is an r > 0 and q ∈ ℝn such that p ∈ B(q,r) ⊆ U }, where B(q,r) = Bn(q,r) := {x ∈ ℝn | dEucl(q,x) < r} is the ball of radius r centered at q (and dEucl is Euclidean distance).    Euclidean topology relative to a subset X ⊆ ℝn: 𝒯Eucl sub := {U ∩ X | U ⊆ ℝn and U is in 𝒯Eucl}.    Finite complement topology on a set X: 𝒯fc := {U ⊆ X | X - U is a finite set} ∪ {∅}.    Included point topology on a set X with included point a ∈ X: 𝒯incl := {U ⊆ X | a ∈ U} ∪ {∅}.    Excluded point topology on a set X with excluded point a ∈ X: 𝒯excl := {U ⊆ X | a ∉ U} ∪ {X}.    Infinite ray topology on ℝ: 𝒯ray := { (-∞,a) | a ∈ ℝ} ∪ {∅,ℝ}.    Preimage topology constructed on a set X from a function f:X → Y and a topology 𝒯Y on Y: 𝒯f := {f-1(U) | U ∈ 𝒯Y}.    Line with two origins with set (ℝ - {0}) ∪ {*,@} and topology 𝒯 := {U | U ⊆ ℝ,- {0} and U ∈ 𝒯Eucl} ∪ {(U - {0}) ∪ {*} | U ⊆ ℝ, 0 ∈ U, and U ∈ 𝒯Eucl} ∪ {(U - {0}) ∪ {@} | U ⊆ ℝ, 0 ∈ U, and U ∈ 𝒯Eucl} ∪ {(U - {0}) ∪ {*,@} | U ⊆ ℝ, 0 ∈ U, and U ∈ 𝒯Eucl}.    On the finite set X = {a,b,c}: 𝒯 = { ∅, {a}, {a,b}, {a,c}, X}.     "
},
{
  "id": "def-coarser-finer",
  "level": "2",
  "url": "section-topologies-open-sets.html#def-coarser-finer",
  "type": "Definition",
  "number": "1.14",
  "title": "Coarser, Finer.",
  "body": "Coarser, Finer   Let 𝒯 and 𝒯' be topologies on a set X. If 𝒯 ⊆ 𝒯, then the topology 𝒯 is called smaller or coarser than 𝒯', and the topology 𝒯' is called larger or finer than 𝒯.   "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "section-topologies-open-sets.html#remark-3",
  "type": "Remark",
  "number": "1.15",
  "title": "",
  "body": " These are sometimes called smaller and larger, but that can be misleading.  "
},
{
  "id": "sec-limit-points-closed-sets",
  "level": "1",
  "url": "sec-limit-points-closed-sets.html",
  "type": "Section",
  "number": "1.2",
  "title": "Limit Points and Closed Sets",
  "body": "Limit Points and Closed Sets  Limit Point   Let (𝑋, 𝒯) be a topological space, 𝐴 a subset of 𝑋, and 𝑝 a point in 𝑋. Then 𝑝 is a limit point of 𝐴 if and only if for each open set 𝑈 containing 𝑝, (𝑈 − {𝑝}) ∩ 𝐴 ≠ ∅. Notice that 𝑝 may or may not belong to 𝐴.    Phrased differently, 𝑝 is a limit point of 𝐴 if every open set containing 𝑝 intersects 𝐴 at some point other than 𝑝 itself. Thus, the concept of a limit point gives us a way of capturing the idea of a point being “arbitrarily close” to a set without using the concept of distance. Instead, we use the idea of open sets in a topology.  Let 𝑋 = ℝ and 𝐴 = (1, 2). Verify that 0 is a limit point of 𝐴 in the indiscrete topology and the finite complement topology, but not in the standard topology nor the discrete topology on ℝ.    Suppose 𝑝 ∉ 𝐴 in a topological space (𝑋, 𝒯). Then 𝑝 is not a limit point of 𝐴 if and only if there exists a neighborhood 𝑈 of 𝑝 such that 𝑈 ∩ 𝐴 = ∅.    Isolated Point   Let (𝑋, 𝒯) be a topological space, 𝐴 a subset of 𝑋, and 𝑝 a point in 𝑋. If 𝑝 ∈ 𝐴 but 𝑝 is not a limit point of 𝐴, then 𝑝 is an isolated point of 𝐴.    If 𝑝 is an isolated point of a set 𝐴 in a topological space 𝑋, show that there exists an open set 𝑈 such that 𝑈 ∩ 𝐴 = {𝑝}.  Give examples of sets 𝐴 in various topological spaces (𝑋, 𝒯) with   a limit point of 𝐴 that is an element of 𝐴;    a limit point of 𝐴 that is not an element of 𝐴;    an isolated point of 𝐴;    a point not in 𝐴 that is not a limit point of 𝐴.     Closure   Let (𝑋, 𝒯) be a topological space and 𝐴 ⊂ 𝑋. Then the closure of 𝐴 in 𝑋, denoted \\ov 𝐴 or Cl(𝐴) or Cl𝑋 (𝐴), is the set 𝐴 together with all its limit points in 𝑋.    Closed Set   Let (𝑋, 𝒯) be a topological space and 𝐴 ⊂ 𝑋. The subset 𝐴 is closed if and only if \\ov 𝐴 = 𝐴, in other words, if 𝐴 contains all its limit points.       Which sets are closed in a set 𝑋 with the discrete topology?    Which sets are closed in a set 𝑋 with the indiscrete topology?    Which sets are closed in a set 𝑋 with the finite complement topology?    Which sets are closed in a set 𝑋 with the countable complement topology?     Closure of Closure   For any topological space (𝑋, 𝒯) and 𝐴 ⊂ 𝑋, the set \\ov 𝐴 is closed. That is, for any set 𝐴 in a topological space, \\ov 𝐴 = \\ov\\ov 𝐴.    Open and Closed Complements   Let (𝑋, 𝒯) be a topological space. Then the set 𝐴 is closed if and only if 𝑋 − 𝐴 is open.      Let (𝑋, 𝒯) be a topological space, and let 𝑈 be an open set and 𝐴 a closed subset of 𝑋. Then the set 𝑈 − 𝐴 is open and the set 𝐴 − 𝑈 is closed.    Properties of Closed Sets   Let (𝑋, 𝒯) be a topological space. Then:   ∅ is closed.    𝑋 is closed.    The union of finitely many closed sets is closed.    Let {𝐴𝛼}𝛼∈𝜆 be a collection of closed subsets in (𝑋, 𝒯). Then ⋂𝛼∈𝜆 𝐴𝛼 is closed.         shows that an alternative way to build up a theory of topology would be to specify all subsets that are “closed,” and demand that they satisfy the above four properties.    Give an example to show that the union of infinitely many closed sets in a topological space may be a set that is not closed.    Give examples of topological spaces and sets in them that   are closed, but not open;    are open, but not closed;    are both open and closed;    are neither open nor closed.       The words “closed” and “open” are not antonyms!    State whether each of the following sets are open, closed, both, or neither:   In ℤ with the finite complement topology: {0, 1, 2}, {prime numbers}, {𝑛 ∣ |𝑛| ≥ 10}.    In ℝ with the standard topology: (0, 1), (0, 1], [0, 1], {0, 1}, {1\/𝑛 | 𝑛 ∈ ℕ}.    In ℝ2 with the standard topology: {(𝑥, 𝑦) | 𝑥2 + 𝑦2 = 1}, {(𝑥, 𝑦) | 𝑥2 + 𝑦2 > 1}, {(𝑥, 𝑦) | 𝑥2 + 𝑦2 ≥ 1}.      One way to think about the closure of a set is as the intersection of all the closed sets that contain it.  Characterization of Closure   For any set 𝐴 in a topological space 𝑋, the closure of 𝐴 equals the intersection of all closed sets containing 𝐴, that is, 𝐴 = ⋂ 𝐵⊃𝐴,𝐵∈𝒞 𝐵, where 𝒞 is the collection of all closed sets in 𝑋.     Pick several different subsets of ℝ, and find their closures in   the discrete topology;    the indiscrete topology;    the finite complement topology;    the standard topology.        Let 𝐴 and 𝐵 be subsets of a topological space 𝑋. Then:   𝐴 ⊂ 𝐵 implies \\ov 𝐴 ⊂ \\ov 𝐵.    \\ov 𝐴 ∪ 𝐵 = \\ov 𝐴 ∪ \\ov 𝐵.        Let {𝐴𝛼}𝛼∈𝜆 be a collection of subsets of a topological space 𝑋. Then is the statement ⋃ 𝛼∈𝜆 𝐴𝛼 = ⋃ 𝛼∈𝜆 𝐴𝛼 true?   Interior   The interior of a set 𝐴 in a topological space 𝑋, denoted 𝐴∘ or Int(𝐴), is defined as: Int(𝐴) = ⋃ 𝑈⊂𝐴, 𝑈∈𝒯 𝑈. Points of Int(𝐴) are called interior points of 𝐴.    Characterization of Interior Points   Let 𝐴 be a subset of a topological space 𝑋. Then 𝑝 is an interior point of 𝐴 if and only if there exists an open set 𝑈 with 𝑝 ∈ 𝑈 ⊂ 𝐴.     Show that a set 𝑈 is open in a topological space 𝑋 if and only if every point of 𝑈 is an interior point of 𝑈.   Boundary   The boundary of 𝐴, denoted Bd(𝐴) or 𝜕𝐴, is defined to be \\ov 𝐴 ∩ \\ov 𝑋 − 𝐴.      Let 𝐴 be a subset of a topological space 𝑋. Then Int(𝐴), Bd(𝐴), and Int(𝑋 − 𝐴) are disjoint sets whose union is 𝑋.     Pick several different subsets of ℝ, and for each one, find its interior and boundary using   the discrete topology;    the indiscrete topology;    the finite complement topology;    the standard topology.      "
},
{
  "id": "def-limit-point",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#def-limit-point",
  "type": "Definition",
  "number": "1.16",
  "title": "Limit Point.",
  "body": "Limit Point   Let (𝑋, 𝒯) be a topological space, 𝐴 a subset of 𝑋, and 𝑝 a point in 𝑋. Then 𝑝 is a limit point of 𝐴 if and only if for each open set 𝑈 containing 𝑝, (𝑈 − {𝑝}) ∩ 𝐴 ≠ ∅. Notice that 𝑝 may or may not belong to 𝐴.   "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#exercise-2",
  "type": "Exploration",
  "number": "1.17",
  "title": "",
  "body": "Let 𝑋 = ℝ and 𝐴 = (1, 2). Verify that 0 is a limit point of 𝐴 in the indiscrete topology and the finite complement topology, but not in the standard topology nor the discrete topology on ℝ. "
},
{
  "id": "thm-not-limit",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#thm-not-limit",
  "type": "Theorem",
  "number": "1.18",
  "title": "",
  "body": "  Suppose 𝑝 ∉ 𝐴 in a topological space (𝑋, 𝒯). Then 𝑝 is not a limit point of 𝐴 if and only if there exists a neighborhood 𝑈 of 𝑝 such that 𝑈 ∩ 𝐴 = ∅.   "
},
{
  "id": "def-isolated-point",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#def-isolated-point",
  "type": "Definition",
  "number": "1.19",
  "title": "Isolated Point.",
  "body": "Isolated Point   Let (𝑋, 𝒯) be a topological space, 𝐴 a subset of 𝑋, and 𝑝 a point in 𝑋. If 𝑝 ∈ 𝐴 but 𝑝 is not a limit point of 𝐴, then 𝑝 is an isolated point of 𝐴.   "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#exercise-3",
  "type": "Exploration",
  "number": "1.20",
  "title": "",
  "body": "If 𝑝 is an isolated point of a set 𝐴 in a topological space 𝑋, show that there exists an open set 𝑈 such that 𝑈 ∩ 𝐴 = {𝑝}. "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#exercise-4",
  "type": "Exploration",
  "number": "1.21",
  "title": "",
  "body": "Give examples of sets 𝐴 in various topological spaces (𝑋, 𝒯) with   a limit point of 𝐴 that is an element of 𝐴;    a limit point of 𝐴 that is not an element of 𝐴;    an isolated point of 𝐴;    a point not in 𝐴 that is not a limit point of 𝐴.    "
},
{
  "id": "def-closure",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#def-closure",
  "type": "Definition",
  "number": "1.22",
  "title": "Closure.",
  "body": "Closure   Let (𝑋, 𝒯) be a topological space and 𝐴 ⊂ 𝑋. Then the closure of 𝐴 in 𝑋, denoted \\ov 𝐴 or Cl(𝐴) or Cl𝑋 (𝐴), is the set 𝐴 together with all its limit points in 𝑋.   "
},
{
  "id": "def-closed",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#def-closed",
  "type": "Definition",
  "number": "1.23",
  "title": "Closed Set.",
  "body": "Closed Set   Let (𝑋, 𝒯) be a topological space and 𝐴 ⊂ 𝑋. The subset 𝐴 is closed if and only if \\ov 𝐴 = 𝐴, in other words, if 𝐴 contains all its limit points.   "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#exercise-5",
  "type": "Exploration",
  "number": "1.24",
  "title": "",
  "body": "   Which sets are closed in a set 𝑋 with the discrete topology?    Which sets are closed in a set 𝑋 with the indiscrete topology?    Which sets are closed in a set 𝑋 with the finite complement topology?    Which sets are closed in a set 𝑋 with the countable complement topology?    "
},
{
  "id": "thm-double-closure",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#thm-double-closure",
  "type": "Theorem",
  "number": "1.25",
  "title": "Closure of Closure.",
  "body": "Closure of Closure   For any topological space (𝑋, 𝒯) and 𝐴 ⊂ 𝑋, the set \\ov 𝐴 is closed. That is, for any set 𝐴 in a topological space, \\ov 𝐴 = \\ov\\ov 𝐴.   "
},
{
  "id": "thm-closed-complement",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#thm-closed-complement",
  "type": "Theorem",
  "number": "1.26",
  "title": "Open and Closed Complements.",
  "body": "Open and Closed Complements   Let (𝑋, 𝒯) be a topological space. Then the set 𝐴 is closed if and only if 𝑋 − 𝐴 is open.   "
},
{
  "id": "thm-closed-closed-open",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#thm-closed-closed-open",
  "type": "Theorem",
  "number": "1.27",
  "title": "",
  "body": "  Let (𝑋, 𝒯) be a topological space, and let 𝑈 be an open set and 𝐴 a closed subset of 𝑋. Then the set 𝑈 − 𝐴 is open and the set 𝐴 − 𝑈 is closed.   "
},
{
  "id": "thm-closed-properties",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#thm-closed-properties",
  "type": "Theorem",
  "number": "1.28",
  "title": "Properties of Closed Sets.",
  "body": "Properties of Closed Sets   Let (𝑋, 𝒯) be a topological space. Then:   ∅ is closed.    𝑋 is closed.    The union of finitely many closed sets is closed.    Let {𝐴𝛼}𝛼∈𝜆 be a collection of closed subsets in (𝑋, 𝒯). Then ⋂𝛼∈𝜆 𝐴𝛼 is closed.      "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#remark-4",
  "type": "Remark",
  "number": "1.29",
  "title": "",
  "body": "  shows that an alternative way to build up a theory of topology would be to specify all subsets that are “closed,” and demand that they satisfy the above four properties.  "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#exercise-6",
  "type": "Exploration",
  "number": "1.30",
  "title": "",
  "body": " Give an example to show that the union of infinitely many closed sets in a topological space may be a set that is not closed.  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#exercise-7",
  "type": "Exploration",
  "number": "1.31",
  "title": "",
  "body": " Give examples of topological spaces and sets in them that   are closed, but not open;    are open, but not closed;    are both open and closed;    are neither open nor closed.     "
},
{
  "id": "warning-2",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#warning-2",
  "type": "Warning",
  "number": "1.32",
  "title": "",
  "body": " The words “closed” and “open” are not antonyms!  "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#exercise-8",
  "type": "Exploration",
  "number": "1.33",
  "title": "",
  "body": " State whether each of the following sets are open, closed, both, or neither:   In ℤ with the finite complement topology: {0, 1, 2}, {prime numbers}, {𝑛 ∣ |𝑛| ≥ 10}.    In ℝ with the standard topology: (0, 1), (0, 1], [0, 1], {0, 1}, {1\/𝑛 | 𝑛 ∈ ℕ}.    In ℝ2 with the standard topology: {(𝑥, 𝑦) | 𝑥2 + 𝑦2 = 1}, {(𝑥, 𝑦) | 𝑥2 + 𝑦2 > 1}, {(𝑥, 𝑦) | 𝑥2 + 𝑦2 ≥ 1}.     "
},
{
  "id": "thm-closure-intersection",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#thm-closure-intersection",
  "type": "Theorem",
  "number": "1.34",
  "title": "Characterization of Closure.",
  "body": "Characterization of Closure   For any set 𝐴 in a topological space 𝑋, the closure of 𝐴 equals the intersection of all closed sets containing 𝐴, that is, 𝐴 = ⋂ 𝐵⊃𝐴,𝐵∈𝒞 𝐵, where 𝒞 is the collection of all closed sets in 𝑋.   "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#exercise-9",
  "type": "Exploration",
  "number": "1.35",
  "title": "",
  "body": " Pick several different subsets of ℝ, and find their closures in   the discrete topology;    the indiscrete topology;    the finite complement topology;    the standard topology.     "
},
{
  "id": "thm-union-closure",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#thm-union-closure",
  "type": "Theorem",
  "number": "1.36",
  "title": "",
  "body": "  Let 𝐴 and 𝐵 be subsets of a topological space 𝑋. Then:   𝐴 ⊂ 𝐵 implies \\ov 𝐴 ⊂ \\ov 𝐵.    \\ov 𝐴 ∪ 𝐵 = \\ov 𝐴 ∪ \\ov 𝐵.      "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#exercise-10",
  "type": "Exploration",
  "number": "1.37",
  "title": "",
  "body": " Let {𝐴𝛼}𝛼∈𝜆 be a collection of subsets of a topological space 𝑋. Then is the statement ⋃ 𝛼∈𝜆 𝐴𝛼 = ⋃ 𝛼∈𝜆 𝐴𝛼 true?  "
},
{
  "id": "def-interior",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#def-interior",
  "type": "Definition",
  "number": "1.38",
  "title": "Interior.",
  "body": "Interior   The interior of a set 𝐴 in a topological space 𝑋, denoted 𝐴∘ or Int(𝐴), is defined as: Int(𝐴) = ⋃ 𝑈⊂𝐴, 𝑈∈𝒯 𝑈. Points of Int(𝐴) are called interior points of 𝐴.   "
},
{
  "id": "thm-interior-point-characterization",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#thm-interior-point-characterization",
  "type": "Theorem",
  "number": "1.39",
  "title": "Characterization of Interior Points.",
  "body": "Characterization of Interior Points   Let 𝐴 be a subset of a topological space 𝑋. Then 𝑝 is an interior point of 𝐴 if and only if there exists an open set 𝑈 with 𝑝 ∈ 𝑈 ⊂ 𝐴.   "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#exercise-11",
  "type": "Exploration",
  "number": "1.40",
  "title": "",
  "body": " Show that a set 𝑈 is open in a topological space 𝑋 if and only if every point of 𝑈 is an interior point of 𝑈.  "
},
{
  "id": "def-boundary",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#def-boundary",
  "type": "Definition",
  "number": "1.41",
  "title": "Boundary.",
  "body": "Boundary   The boundary of 𝐴, denoted Bd(𝐴) or 𝜕𝐴, is defined to be \\ov 𝐴 ∩ \\ov 𝑋 − 𝐴.   "
},
{
  "id": "thm-int-bd-disjoint",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#thm-int-bd-disjoint",
  "type": "Theorem",
  "number": "1.42",
  "title": "",
  "body": "  Let 𝐴 be a subset of a topological space 𝑋. Then Int(𝐴), Bd(𝐴), and Int(𝑋 − 𝐴) are disjoint sets whose union is 𝑋.   "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "sec-limit-points-closed-sets.html#exercise-12",
  "type": "Exploration",
  "number": "1.43",
  "title": "",
  "body": " Pick several different subsets of ℝ, and for each one, find its interior and boundary using   the discrete topology;    the indiscrete topology;    the finite complement topology;    the standard topology.     "
},
{
  "id": "sec-continuity",
  "level": "1",
  "url": "sec-continuity.html",
  "type": "Section",
  "number": "1.3",
  "title": "Continuity",
  "body": "Continuity    Let X and Y be topological spaces, and let f: X → Y be a function. The function f is continuous if and only if for every open set U in Y, the preimage f -1(U) is open in X.      Let X and Y be topological spaces and let f: X → Y. Then f is continuous if and only for every closed set C in Y, the preimage f -1(C) is closed in X.     If X and Y are topological spaces and f:X → Y is a constant function, then f is continuous.        Let c be a real number. The function f:ℝ → ℝ defined by f(r) := cr for all r ∈ ℝ is continuous.    The functions from ℝ2 to ℝ defined by addition, subtraction, and multiplication are continuous.    The function g:ℝ × (ℝ - {0}) → ℝ defined by g(x,y) := x\/y is continuous.    A uniform limit of continuous functions from ℝ to ℝ is continuous; hence sine and cosine are continuous.         If X and Y are topological spaces and f: X → Y and g: Y → Z are continuous, then the composition g ∘ f: X → Z is continuous.      Let (X,𝒯X) and (Y,𝒯Y) be topological spaces and let f: X → Y. The function f is continuous iff for all V ∈ 𝒯Y and f(x) ∈ V, there exist U ∈ 𝒯X with x ∈ U and f(U) ⊆ V.      Let X and Y be topological spaces, let A and B be closed subsets of X, and let A and B have the subspace topologies inherited from X. If f: X → Y satisfies that f|A and f|B are both continuous, then f is continuous.      Let X and Y be topological spaces. A function f: X → Y is a homeomorphism if f is a continuous bijection and f -1 is also continuous. The spaces X and Y are called homeomorphic, or topologically equivalent, if there is a homeomorphism from X to Y; in symbols this is written X ≅ Y.      \"Homeomorphic\" is a quasi-equivalence relation on topological spaces.      If 𝑓 ∶ 𝑋 → 𝑌 is continuous, the following are equivalent:   𝑓 is a homeomorphism.    𝑓 is a closed bijection.    𝑓 is an open bijection.         Thm 2.174: If X and Y are topological spaces and f: X → Y, then f is continuous if and only if for all A ⊆ X, f(ClX(A)) ⊆ ClY(f(A)).    "
},
{
  "id": "def-continuous",
  "level": "2",
  "url": "sec-continuity.html#def-continuous",
  "type": "Definition",
  "number": "1.44",
  "title": "",
  "body": "  Let X and Y be topological spaces, and let f: X → Y be a function. The function f is continuous if and only if for every open set U in Y, the preimage f -1(U) is open in X.   "
},
{
  "id": "thm-closed-continuous",
  "level": "2",
  "url": "sec-continuity.html#thm-closed-continuous",
  "type": "Theorem",
  "number": "1.45",
  "title": "",
  "body": "  Let X and Y be topological spaces and let f: X → Y. Then f is continuous if and only for every closed set C in Y, the preimage f -1(C) is closed in X.   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "sec-continuity.html#example-2",
  "type": "Example",
  "number": "1.46",
  "title": "",
  "body": " If X and Y are topological spaces and f:X → Y is a constant function, then f is continuous.  "
},
{
  "id": "thm-real-continuity",
  "level": "2",
  "url": "sec-continuity.html#thm-real-continuity",
  "type": "Theorem",
  "number": "1.47",
  "title": "",
  "body": "     Let c be a real number. The function f:ℝ → ℝ defined by f(r) := cr for all r ∈ ℝ is continuous.    The functions from ℝ2 to ℝ defined by addition, subtraction, and multiplication are continuous.    The function g:ℝ × (ℝ - {0}) → ℝ defined by g(x,y) := x\/y is continuous.    A uniform limit of continuous functions from ℝ to ℝ is continuous; hence sine and cosine are continuous.      "
},
{
  "id": "thm-continuous-composition",
  "level": "2",
  "url": "sec-continuity.html#thm-continuous-composition",
  "type": "Theorem",
  "number": "1.48",
  "title": "",
  "body": "  If X and Y are topological spaces and f: X → Y and g: Y → Z are continuous, then the composition g ∘ f: X → Z is continuous.   "
},
{
  "id": "thm-continuous-characterization",
  "level": "2",
  "url": "sec-continuity.html#thm-continuous-characterization",
  "type": "Theorem",
  "number": "1.49",
  "title": "",
  "body": "  Let (X,𝒯X) and (Y,𝒯Y) be topological spaces and let f: X → Y. The function f is continuous iff for all V ∈ 𝒯Y and f(x) ∈ V, there exist U ∈ 𝒯X with x ∈ U and f(U) ⊆ V.   "
},
{
  "id": "thm-pasting-lemma",
  "level": "2",
  "url": "sec-continuity.html#thm-pasting-lemma",
  "type": "Theorem",
  "number": "1.50",
  "title": "",
  "body": "  Let X and Y be topological spaces, let A and B be closed subsets of X, and let A and B have the subspace topologies inherited from X. If f: X → Y satisfies that f|A and f|B are both continuous, then f is continuous.   "
},
{
  "id": "def-homeomorphism",
  "level": "2",
  "url": "sec-continuity.html#def-homeomorphism",
  "type": "Definition",
  "number": "1.51",
  "title": "",
  "body": "  Let X and Y be topological spaces. A function f: X → Y is a homeomorphism if f is a continuous bijection and f -1 is also continuous. The spaces X and Y are called homeomorphic, or topologically equivalent, if there is a homeomorphism from X to Y; in symbols this is written X ≅ Y.   "
},
{
  "id": "thm-homeomorphic-quasi-equivalence",
  "level": "2",
  "url": "sec-continuity.html#thm-homeomorphic-quasi-equivalence",
  "type": "Theorem",
  "number": "1.52",
  "title": "",
  "body": "  \"Homeomorphic\" is a quasi-equivalence relation on topological spaces.   "
},
{
  "id": "thm-728",
  "level": "2",
  "url": "sec-continuity.html#thm-728",
  "type": "Theorem",
  "number": "1.53",
  "title": "",
  "body": "  If 𝑓 ∶ 𝑋 → 𝑌 is continuous, the following are equivalent:   𝑓 is a homeomorphism.    𝑓 is a closed bijection.    𝑓 is an open bijection.      "
},
{
  "id": "thm-2174",
  "level": "2",
  "url": "sec-continuity.html#thm-2174",
  "type": "Theorem",
  "number": "1.54",
  "title": "",
  "body": "  Thm 2.174: If X and Y are topological spaces and f: X → Y, then f is continuous if and only if for all A ⊆ X, f(ClX(A)) ⊆ ClY(f(A)).   "
},
{
  "id": "sec-bases",
  "level": "1",
  "url": "sec-bases.html",
  "type": "Section",
  "number": "1.4",
  "title": "Bases",
  "body": "Bases    A basis on a set X is a collection ℬ of subsets of X satisfying:   For each p in X there is an Np in ℬ such that p ∈ Np, and    whenever N1,N2 are in ℬ and p is an element of N1 ∩ N2, then there is an N3 in ℬ such that p ∈ N3 ⊆ N1 ∩ N2.         The topology generated by a basis ℬ is 𝒯(ℬ) := {U ⊆ X | for all p in U there is an N in ℬ such that p ∈ N ⊆ U}.         If ℬ is a basis on X, then 𝒯(ℬ) is a topology on X.    If 𝒯' is a topology on X, then 𝒯' is also a basis on X, and 𝒯(𝒯') = 𝒯'.         If ℬ is a basis on X and U ⊆ X, then U is in 𝒯(ℬ) if and only if U is a union of elements of ℬ. That is, 𝒯(ℬ) = { ∪α Bα | Bα ∈ ℬ for all α}.        The Euclidean basis on ℝn is ℬEucl := { Bn(q,r) | q ∈ ℝn and r > 0}.    The lower limit topology on the set ℝ is the topology 𝒯ll := 𝒯(ℬll) generated by the basis ℬll := {[a,b) | a,b ∈ ℝ, a < b}.        𝒯(ℬEucl) = 𝒯Eucl.      Let ℬY be a basis on a set Y. A function f: (X,𝒯X) → (Y,𝒯(ℬY)) is continuous if and only if for every basis element N ∈ ℬY, the preimage f-1(N) is open in X.      Thm 2.42: Let ℬ and ℬ' be bases on a set X. Then 𝒯(ℬ) ⊆ 𝒯(ℬ') iff for all N in ℬ and x in N, there is a N' in ℬ' with x ∈ N' ⊆ N.      A subbasis on a set X is a collection 𝒮 of subsets of X satisfying ∪U ∈ 𝒮 U = X.      The basis generated by a subbasis 𝒮 is ℬ(𝒮) := {∩i=1n Ui | n ∈ ℕ and Ui ∈ 𝒮 for all i}. The topology generated by a subbasis 𝒮 is 𝒯(𝒮) := 𝒯(ℬ(𝒮)).      Let 𝒮Y be a subbasis on a set Y.   The basis ℬ(𝒮Y) generated by the subbasis 𝒮Y is a basis, and hence the topology 𝒯(𝒮Y) generated by the subbasis 𝒮Y is a topology.    A function f: (X,𝒯X) → (Y,𝒯(𝒮Y)) is continuous if and only if for every subbasis element V ∈ 𝒮Y, the preimage f-1(V) is open in X.       "
},
{
  "id": "def-basis",
  "level": "2",
  "url": "sec-bases.html#def-basis",
  "type": "Definition",
  "number": "1.55",
  "title": "",
  "body": "  A basis on a set X is a collection ℬ of subsets of X satisfying:   For each p in X there is an Np in ℬ such that p ∈ Np, and    whenever N1,N2 are in ℬ and p is an element of N1 ∩ N2, then there is an N3 in ℬ such that p ∈ N3 ⊆ N1 ∩ N2.      "
},
{
  "id": "def-generated-topology",
  "level": "2",
  "url": "sec-bases.html#def-generated-topology",
  "type": "Definition",
  "number": "1.56",
  "title": "",
  "body": "  The topology generated by a basis ℬ is 𝒯(ℬ) := {U ⊆ X | for all p in U there is an N in ℬ such that p ∈ N ⊆ U}.   "
},
{
  "id": "prop-basis-verification",
  "level": "2",
  "url": "sec-bases.html#prop-basis-verification",
  "type": "Proposition",
  "number": "1.57",
  "title": "",
  "body": "     If ℬ is a basis on X, then 𝒯(ℬ) is a topology on X.    If 𝒯' is a topology on X, then 𝒯' is also a basis on X, and 𝒯(𝒯') = 𝒯'.      "
},
{
  "id": "thm-basis-union",
  "level": "2",
  "url": "sec-bases.html#thm-basis-union",
  "type": "Theorem",
  "number": "1.58",
  "title": "",
  "body": "  If ℬ is a basis on X and U ⊆ X, then U is in 𝒯(ℬ) if and only if U is a union of elements of ℬ. That is, 𝒯(ℬ) = { ∪α Bα | Bα ∈ ℬ for all α}.   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "sec-bases.html#example-3",
  "type": "Example",
  "number": "1.59",
  "title": "",
  "body": "    The Euclidean basis on ℝn is ℬEucl := { Bn(q,r) | q ∈ ℝn and r > 0}.    The lower limit topology on the set ℝ is the topology 𝒯ll := 𝒯(ℬll) generated by the basis ℬll := {[a,b) | a,b ∈ ℝ, a < b}.     "
},
{
  "id": "prop-euclidean-basis",
  "level": "2",
  "url": "sec-bases.html#prop-euclidean-basis",
  "type": "Proposition",
  "number": "1.60",
  "title": "",
  "body": "  𝒯(ℬEucl) = 𝒯Eucl.   "
},
{
  "id": "thm-basis-continuity",
  "level": "2",
  "url": "sec-bases.html#thm-basis-continuity",
  "type": "Theorem",
  "number": "1.61",
  "title": "",
  "body": "  Let ℬY be a basis on a set Y. A function f: (X,𝒯X) → (Y,𝒯(ℬY)) is continuous if and only if for every basis element N ∈ ℬY, the preimage f-1(N) is open in X.   "
},
{
  "id": "thm-basis-containment",
  "level": "2",
  "url": "sec-bases.html#thm-basis-containment",
  "type": "Theorem",
  "number": "1.62",
  "title": "",
  "body": "  Thm 2.42: Let ℬ and ℬ' be bases on a set X. Then 𝒯(ℬ) ⊆ 𝒯(ℬ') iff for all N in ℬ and x in N, there is a N' in ℬ' with x ∈ N' ⊆ N.   "
},
{
  "id": "def-subbasis",
  "level": "2",
  "url": "sec-bases.html#def-subbasis",
  "type": "Definition",
  "number": "1.63",
  "title": "",
  "body": "  A subbasis on a set X is a collection 𝒮 of subsets of X satisfying ∪U ∈ 𝒮 U = X.   "
},
{
  "id": "def-generated-subbasis",
  "level": "2",
  "url": "sec-bases.html#def-generated-subbasis",
  "type": "Definition",
  "number": "1.64",
  "title": "",
  "body": "  The basis generated by a subbasis 𝒮 is ℬ(𝒮) := {∩i=1n Ui | n ∈ ℕ and Ui ∈ 𝒮 for all i}. The topology generated by a subbasis 𝒮 is 𝒯(𝒮) := 𝒯(ℬ(𝒮)).   "
},
{
  "id": "thm-subbasis-properties",
  "level": "2",
  "url": "sec-bases.html#thm-subbasis-properties",
  "type": "Theorem",
  "number": "1.65",
  "title": "",
  "body": "  Let 𝒮Y be a subbasis on a set Y.   The basis ℬ(𝒮Y) generated by the subbasis 𝒮Y is a basis, and hence the topology 𝒯(𝒮Y) generated by the subbasis 𝒮Y is a topology.    A function f: (X,𝒯X) → (Y,𝒯(𝒮Y)) is continuous if and only if for every subbasis element V ∈ 𝒮Y, the preimage f-1(V) is open in X.      "
},
{
  "id": "sec-subspaces",
  "level": "1",
  "url": "sec-subspaces.html",
  "type": "Section",
  "number": "2.1",
  "title": "Subspaces",
  "body": "Subspaces    Let X be a topological space and let A be a subset of X. The subspace topology on A is 𝒯sub := {U ∩ A | U is an open set in X}. The set A with the subspace topology is called a subspace of X. An element V of the subspace topology on A is called open in A or open set relative to A or open rel A.     \"Open in A\" does not mean open and contained in A.    In mathematical writing, always specify \"open in __\", never write just \"open\".     The subspace topology is a topology.     Consider 𝑌 = [0, 1) as a subspace of ℝstd. In 𝑌 , is the set [1\/2, 1) open, closed, neither, or both?    Consider a subspace 𝑌 of the topological space 𝑋. Is every subset 𝑈 ⊂ 𝑌 that is open in 𝑌 also open in 𝑋?     If A is a subspace of X, then the inclusion map i:A → X is continuous.      If A is a subspace of B and B is a subspace of C then A is a subspace of C.      If A is a subspace of X and C is a subset of A, then C is closed in A if and only if C = A ∩ D for some closed set D in X.      Given a topological space X with topology 𝒯(ℬ) generated by a basis ℬ, and given and Y ⊆ X, the subspace topology on Y equals the topology generated by the basis ℬsub = { B ∩ Y | B ∈ ℬ }.      Let X and Y be topological spaces, let A be a subspace of X, and let B be a subspace of Y.   The inclusion i: A → X is continuous.    If f: X → Y is continuous, then f|A: A → Y is continuous.    If f: X → Y is continuous and f(X) ⊆ B, then f|B: X → B is continuous.    If f: X → B is continuous then f|Y: X → Y is continuous.         Let X be a topological space and suppose that X = ∪α Uα with each Uα open in X. Let each Uα have the subspace topology from X. If f: X → Y is a function satisfying f|Uα: Uα → Y is continuous for all α, then f is continuous.      An embedding of a topological space X in a topological space Y is a map f:X → Y such that the restriction f|f(X):X → f(X) of f to the codomain f(X), with the subspace topology on f(X) from Y, is a homeomorphism.      If A is a subspace of X, then the inclusion map i:A → X is an imbedding.      Let Y be a subspace of X, and let A be a subset of Y. Then ClY(A) = ClX(A) ∩ Y.    "
},
{
  "id": "def-subspace-topology",
  "level": "2",
  "url": "sec-subspaces.html#def-subspace-topology",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": "  Let X be a topological space and let A be a subset of X. The subspace topology on A is 𝒯sub := {U ∩ A | U is an open set in X}. The set A with the subspace topology is called a subspace of X. An element V of the subspace topology on A is called open in A or open set relative to A or open rel A.   "
},
{
  "id": "warning-3",
  "level": "2",
  "url": "sec-subspaces.html#warning-3",
  "type": "Warning",
  "number": "2.2",
  "title": "",
  "body": " \"Open in A\" does not mean open and contained in A.  "
},
{
  "id": "convention-3",
  "level": "2",
  "url": "sec-subspaces.html#convention-3",
  "type": "Convention",
  "number": "2.3",
  "title": "",
  "body": " In mathematical writing, always specify \"open in __\", never write just \"open\".  "
},
{
  "id": "prop-subspace-topology",
  "level": "2",
  "url": "sec-subspaces.html#prop-subspace-topology",
  "type": "Proposition",
  "number": "2.4",
  "title": "",
  "body": "  The subspace topology is a topology.   "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "sec-subspaces.html#exercise-13",
  "type": "Exploration",
  "number": "2.5",
  "title": "",
  "body": " Consider 𝑌 = [0, 1) as a subspace of ℝstd. In 𝑌 , is the set [1\/2, 1) open, closed, neither, or both?  "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "sec-subspaces.html#exercise-14",
  "type": "Exploration",
  "number": "2.6",
  "title": "",
  "body": " Consider a subspace 𝑌 of the topological space 𝑋. Is every subset 𝑈 ⊂ 𝑌 that is open in 𝑌 also open in 𝑋?  "
},
{
  "id": "thm-inclusion-continuous",
  "level": "2",
  "url": "sec-subspaces.html#thm-inclusion-continuous",
  "type": "Theorem",
  "number": "2.7",
  "title": "",
  "body": "  If A is a subspace of X, then the inclusion map i:A → X is continuous.   "
},
{
  "id": "thm-transitive-subspace",
  "level": "2",
  "url": "sec-subspaces.html#thm-transitive-subspace",
  "type": "Theorem",
  "number": "2.8",
  "title": "",
  "body": "  If A is a subspace of B and B is a subspace of C then A is a subspace of C.   "
},
{
  "id": "thm-2160",
  "level": "2",
  "url": "sec-subspaces.html#thm-2160",
  "type": "Theorem",
  "number": "2.9",
  "title": "",
  "body": "  If A is a subspace of X and C is a subset of A, then C is closed in A if and only if C = A ∩ D for some closed set D in X.   "
},
{
  "id": "prop-subspace-basis",
  "level": "2",
  "url": "sec-subspaces.html#prop-subspace-basis",
  "type": "Proposition",
  "number": "2.10",
  "title": "",
  "body": "  Given a topological space X with topology 𝒯(ℬ) generated by a basis ℬ, and given and Y ⊆ X, the subspace topology on Y equals the topology generated by the basis ℬsub = { B ∩ Y | B ∈ ℬ }.   "
},
{
  "id": "thm-restrictions-extensions-continuous",
  "level": "2",
  "url": "sec-subspaces.html#thm-restrictions-extensions-continuous",
  "type": "Theorem",
  "number": "2.11",
  "title": "",
  "body": "  Let X and Y be topological spaces, let A be a subspace of X, and let B be a subspace of Y.   The inclusion i: A → X is continuous.    If f: X → Y is continuous, then f|A: A → Y is continuous.    If f: X → Y is continuous and f(X) ⊆ B, then f|B: X → B is continuous.    If f: X → B is continuous then f|Y: X → Y is continuous.      "
},
{
  "id": "thm-cc8",
  "level": "2",
  "url": "sec-subspaces.html#thm-cc8",
  "type": "Theorem",
  "number": "2.12",
  "title": "",
  "body": "  Let X be a topological space and suppose that X = ∪α Uα with each Uα open in X. Let each Uα have the subspace topology from X. If f: X → Y is a function satisfying f|Uα: Uα → Y is continuous for all α, then f is continuous.   "
},
{
  "id": "def-embedding",
  "level": "2",
  "url": "sec-subspaces.html#def-embedding",
  "type": "Definition",
  "number": "2.13",
  "title": "",
  "body": "  An embedding of a topological space X in a topological space Y is a map f:X → Y such that the restriction f|f(X):X → f(X) of f to the codomain f(X), with the subspace topology on f(X) from Y, is a homeomorphism.   "
},
{
  "id": "thm-inclusion-embedding",
  "level": "2",
  "url": "sec-subspaces.html#thm-inclusion-embedding",
  "type": "Theorem",
  "number": "2.14",
  "title": "",
  "body": "  If A is a subspace of X, then the inclusion map i:A → X is an imbedding.   "
},
{
  "id": "thm-2180",
  "level": "2",
  "url": "sec-subspaces.html#thm-2180",
  "type": "Theorem",
  "number": "2.15",
  "title": "",
  "body": "  Let Y be a subspace of X, and let A be a subset of Y. Then ClY(A) = ClX(A) ∩ Y.   "
},
{
  "id": "sec-product-spaces",
  "level": "1",
  "url": "sec-product-spaces.html",
  "type": "Section",
  "number": "2.2",
  "title": "Product Spaces",
  "body": "Product Spaces    Let (Xα,𝒯α) be a topological space for each index α ∈ J, and let ∏α Xα be the Cartesian product of the spaces Xα. For each index β, let pβ: ∏α Xα → Xβ be the projection map.   The product topology on ∏α Xα is the topology 𝒯prod := 𝒯(𝒮prod) generated by the product subbasis 𝒮prod := { pβ-1(Uβ) | β ∈ J and Uβ ∈ 𝒯β }. The set ∏α Xα with the product topology is called a product space.    The box topology on ∏α Xα is the topology 𝒯box := 𝒯(ℬbox) generated by the box basis ℬbox := {∏α Uα | Uα is open in Xα for all indices α}.            The product subbasis is a subbasis.    The box basis is a basis.    For a collection of spaces (Xα,𝒯α) for α ∈ J, 𝒯prod ⊆ 𝒯box; and if J is finite then 𝒯prod = 𝒯box.         For a collection of spaces (Xα,𝒯α) the product topology on ∏ Xα equals the product generated by the basis ℬprod = { ∏ Bα | Bα ∈ 𝒯α for all α, and Bα = Xα for all but finitely many α }. (The collection ℬprod is called the product basis.)     Draw examples of basic and arbitrary open sets in ℝ2 = ℝ × ℝ using the standard topology on ℝ. Find (i) an open set in ℝ × ℝ that is not the product of open sets, and (ii) a closed set in ℝ × ℝ that is not the product of closed sets.    Is the product of closed sets closed?     Let Xα be a topological space for each index α, and let ∏α Xα have the product topology. Then for each index β, the projection map pβ: ∏α Xα → Xβ is continuous.      Let X = ℝn. Let 𝒯Eucl be the Euclidean topology on X, and let 𝒯prod be the product topology on X induced by the Euclidean topology on each of the ℝ1 factors. Then 𝒯Eucl = 𝒯prod.      Let Xα be a topological space for each index α in an index set J, and let ∏α Xα have the product topology. Let β ∈ J, and for each α ∈ J - {β}, let pα be an (particular choice of) element of Xα. Then the associated product inclusion map iβ: Xβ → ∏α Xα is an imbedding.      Let A be a set, and for each α in an index set J let Xα be a set and let fα:A → Xα. The product function (fα)α ∈ J: A → ∏ Xα is defined by (fα)α ∈ J(a) := (fα(a))α ∈ J for all a ∈ A.      Let A be a set, and for each α let Xα be a set. Then:   Each function f: A → ∏ Xα is a product function f = (fα)α such that fα: A → Xα is defined by fα := pα ∘ f for each index α.    Given functions gα:A → Xα for each α in J, the product function g := (gα)α ∈ J satisfies gα = pα ∘ g for all α.         Let A be a topological space, and for each index α let Xα be a topological space. Let ∏ Xα have the product topology and let f: A → ∏ Xα. Then f is continuous if and only if pα ∘ f is continuous for all α.      Let Aα be a subspace of a space Xα for all α. Let 𝒯prod be the product topology on ∏α Aα. Let 𝒯sub be the subspace topology on ∏α Aα induced by the product topology on ∏α Xα. Then 𝒯prod = 𝒯sub.      If A is closed in X and B is closed in Y, then A × B is closed in X × Y.      Thm 2.182: Let Xα be a topological space and let Aα ⊆ Xα for all α. Let ∏α Xα have the product topology. Then Cl∏α Xα(∏α Aα) = ∏α ClXα(Aα).    "
},
{
  "id": "def-product-topology",
  "level": "2",
  "url": "sec-product-spaces.html#def-product-topology",
  "type": "Definition",
  "number": "2.16",
  "title": "",
  "body": "  Let (Xα,𝒯α) be a topological space for each index α ∈ J, and let ∏α Xα be the Cartesian product of the spaces Xα. For each index β, let pβ: ∏α Xα → Xβ be the projection map.   The product topology on ∏α Xα is the topology 𝒯prod := 𝒯(𝒮prod) generated by the product subbasis 𝒮prod := { pβ-1(Uβ) | β ∈ J and Uβ ∈ 𝒯β }. The set ∏α Xα with the product topology is called a product space.    The box topology on ∏α Xα is the topology 𝒯box := 𝒯(ℬbox) generated by the box basis ℬbox := {∏α Uα | Uα is open in Xα for all indices α}.      "
},
{
  "id": "prop-271",
  "level": "2",
  "url": "sec-product-spaces.html#prop-271",
  "type": "Proposition",
  "number": "2.17",
  "title": "",
  "body": "     The product subbasis is a subbasis.    The box basis is a basis.    For a collection of spaces (Xα,𝒯α) for α ∈ J, 𝒯prod ⊆ 𝒯box; and if J is finite then 𝒯prod = 𝒯box.      "
},
{
  "id": "prop-273",
  "level": "2",
  "url": "sec-product-spaces.html#prop-273",
  "type": "Proposition",
  "number": "2.18",
  "title": "",
  "body": "  For a collection of spaces (Xα,𝒯α) the product topology on ∏ Xα equals the product generated by the basis ℬprod = { ∏ Bα | Bα ∈ 𝒯α for all α, and Bα = Xα for all but finitely many α }. (The collection ℬprod is called the product basis.)   "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "sec-product-spaces.html#exercise-15",
  "type": "Exploration",
  "number": "2.19",
  "title": "",
  "body": " Draw examples of basic and arbitrary open sets in ℝ2 = ℝ × ℝ using the standard topology on ℝ. Find (i) an open set in ℝ × ℝ that is not the product of open sets, and (ii) a closed set in ℝ × ℝ that is not the product of closed sets.  "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "sec-product-spaces.html#exercise-16",
  "type": "Exploration",
  "number": "2.20",
  "title": "",
  "body": " Is the product of closed sets closed?  "
},
{
  "id": "prop-275",
  "level": "2",
  "url": "sec-product-spaces.html#prop-275",
  "type": "Proposition",
  "number": "2.21",
  "title": "",
  "body": "  Let Xα be a topological space for each index α, and let ∏α Xα have the product topology. Then for each index β, the projection map pβ: ∏α Xα → Xβ is continuous.   "
},
{
  "id": "thm-278",
  "level": "2",
  "url": "sec-product-spaces.html#thm-278",
  "type": "Theorem",
  "number": "2.22",
  "title": "",
  "body": "  Let X = ℝn. Let 𝒯Eucl be the Euclidean topology on X, and let 𝒯prod be the product topology on X induced by the Euclidean topology on each of the ℝ1 factors. Then 𝒯Eucl = 𝒯prod.   "
},
{
  "id": "thm-280",
  "level": "2",
  "url": "sec-product-spaces.html#thm-280",
  "type": "Theorem",
  "number": "2.23",
  "title": "",
  "body": "  Let Xα be a topological space for each index α in an index set J, and let ∏α Xα have the product topology. Let β ∈ J, and for each α ∈ J - {β}, let pα be an (particular choice of) element of Xα. Then the associated product inclusion map iβ: Xβ → ∏α Xα is an imbedding.   "
},
{
  "id": "def-product-function",
  "level": "2",
  "url": "sec-product-spaces.html#def-product-function",
  "type": "Definition",
  "number": "2.24",
  "title": "",
  "body": "  Let A be a set, and for each α in an index set J let Xα be a set and let fα:A → Xα. The product function (fα)α ∈ J: A → ∏ Xα is defined by (fα)α ∈ J(a) := (fα(a))α ∈ J for all a ∈ A.   "
},
{
  "id": "lem-283",
  "level": "2",
  "url": "sec-product-spaces.html#lem-283",
  "type": "Lemma",
  "number": "2.25",
  "title": "",
  "body": "  Let A be a set, and for each α let Xα be a set. Then:   Each function f: A → ∏ Xα is a product function f = (fα)α such that fα: A → Xα is defined by fα := pα ∘ f for each index α.    Given functions gα:A → Xα for each α in J, the product function g := (gα)α ∈ J satisfies gα = pα ∘ g for all α.      "
},
{
  "id": "thm-284",
  "level": "2",
  "url": "sec-product-spaces.html#thm-284",
  "type": "Theorem",
  "number": "2.26",
  "title": "",
  "body": "  Let A be a topological space, and for each index α let Xα be a topological space. Let ∏ Xα have the product topology and let f: A → ∏ Xα. Then f is continuous if and only if pα ∘ f is continuous for all α.   "
},
{
  "id": "thm-287",
  "level": "2",
  "url": "sec-product-spaces.html#thm-287",
  "type": "Theorem",
  "number": "2.27",
  "title": "",
  "body": "  Let Aα be a subspace of a space Xα for all α. Let 𝒯prod be the product topology on ∏α Aα. Let 𝒯sub be the subspace topology on ∏α Aα induced by the product topology on ∏α Xα. Then 𝒯prod = 𝒯sub.   "
},
{
  "id": "thm-2162",
  "level": "2",
  "url": "sec-product-spaces.html#thm-2162",
  "type": "Theorem",
  "number": "2.28",
  "title": "",
  "body": "  If A is closed in X and B is closed in Y, then A × B is closed in X × Y.   "
},
{
  "id": "thm-2182",
  "level": "2",
  "url": "sec-product-spaces.html#thm-2182",
  "type": "Theorem",
  "number": "2.29",
  "title": "",
  "body": "  Thm 2.182: Let Xα be a topological space and let Aα ⊆ Xα for all α. Let ∏α Xα have the product topology. Then Cl∏α Xα(∏α Aα) = ∏α ClXα(Aα).   "
},
{
  "id": "sec-quotient-spaces",
  "level": "1",
  "url": "sec-quotient-spaces.html",
  "type": "Section",
  "number": "2.3",
  "title": "Quotient Spaces",
  "body": "Quotient Spaces    Let X be a topological space and let ∼ be an equivalence relation on X. Let X\/∼ be the set of equivalence classes and let q: X → X\/∼ be the equivalence map (defined by q(p) := [p] for all p in X). The quotient topology, or identification topology on X\/∼ induced by ∼, is the topology 𝒯∼ = 𝒯quo:= {U ⊆ X\/∼ | q -1(U) is open in X}. The set X\/∼ together with the quotient topology is called a quotient space of X, and the equivalence map q is called the quotient map induced by ∼.      The quotient topology is a topology.         If X\/∼ is a quotient space of X and q: X → X\/∼ is the equivalence map (defined by q(p) := [p] for all p in X), then q is a continuous surjection.    The quotient topology induced by an equivalence relation is the largest topology on the set of equivalence classes for which the equivalence map is continuous.         Let (X,𝒯X) be a topological space, let Y be a set, and let f:X → Y be a surjective function. The quotient topology on Y induced by f is 𝒯q := {V ⊆ Y | f-1(V) ∈ 𝒯X}. If Y has the quotient topology induced by f then f is called a quotient map.      The quotient topology induced by a function f is a topology.         If f is a quotient map, then f is a continuous surjection.    The quotient topology induced by a map f is the largest topology on the codomain of f for which the map f is continuous.         Let X be a topological space.   If ∼ is an equivalence relation on X, then the quotient topology on X\/∼ induced by ∼ equals the quotient topology on X\/∼ induced by the equivalence map q:X → X\/∼ (defined by q(p) := [p] for all p in X).    If f:X → Y is a surjection, then the quotient space (Y,𝒯f) is homeomorphic to the quotient space (X\/∼,𝒯∼) induced by the equivalence relation on X defined by x ∼ x' if and only if f(x) = f(x') for all x,x' ∈ X; moreover, the homeomorphism g:X\/∼ → Y satisfies g ∘ q = f, where q is the equivalence map.         Let X = [0,1] have the Euclidean subspace topology, and let ∼ be the equivalence relation on X defined by p ∼ q if and only if either [p=q] or [{p,q} = {0,1}]. Then the quotient space X\/∼ is isomorphic to S1.        The torus T2 is the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (r,1) and (0,s) ∼ (1,s) for all r,s ∈ [0,1].    The Klein bottle K2 is the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (r,1) and (0,s) ∼ (1,1-s) for all r,s ∈ [0,1].    The Mobius band M2 is the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (1-r,1) for all r ∈ [0,1].    The projective plane P2 is the quotient space P2 := S2\/∼ where S2 := {(x,y,z) ∈ ℝ3 | x2 + y2 + z2 = 1} is the 2-sphere (with the Euclidean subspace topology) and ∼ is the equivalence relation generated by (x,y,z) ∼ (-x,-y,-z) for all (x,y,z) ∈ S2.        Let X = [0,1] × [0,1] have the product topology (where each [0,1] has the Euclidean subspace topology).   The cylinder S1 × [0,1] is homeomorphic to the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (1,r) for all r ∈ [0,1].    The projective plane P2 is homeomorphic to the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (1-r,1) and (0,1-s) ∼ (1,s) for all r,s ∈ [0,1].    The 2-sphere S2 is homeomorphic to the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (0,r) and (s,1) ∼ (1,s) for all r,s ∈ [0,1].    The torus T2 is homeomorphic to the product space S1 × S1 where each S1 has the Euclidean subspace topology.         Let X and Z be topological spaces, let ∼ be an equivalence relation on X, let q: X → X\/∼ be the equivalence map, and let X\/∼ have the quotient topology. Suppose that f: X → Z is a continuous function that is constant on equivalence classes. Then:   The map f induces a continuous function g: X\/∼ → Z with g ∘ q = f.    If f is onto then g is onto. If f is a quotient map, then g is a quotient map.    If [ f(x)=f(x') implies q(x)=q(x') for all x,x' ∈ X] then g is one-to-one.    If f is a quotient map and (3) holds then g is a homeomorphism.         Let X and Y be topological spaces. An open map from X to Y is a function f:X → Y such that for every open set V in X, the image f(V) is open in Y.         A composition of open functions is open.    If Xα has the topology Tα for each α ∈ J, and ∏α ∈ J Xα has the product topology, then the projection map pβ : (∏α ∈ J Xα) → Xβ is open.         If f: X → Z is continuous, onto, and open, then f is a quotient map.      There exist quotient maps that are not open maps.      A retraction of a topological space X to a subspace A is a continuous function r:X → A satisfying r(a) = a for all a ∈ A.      Every retraction is a quotient map.    "
},
{
  "id": "def-quotient-topology",
  "level": "2",
  "url": "sec-quotient-spaces.html#def-quotient-topology",
  "type": "Definition",
  "number": "2.30",
  "title": "",
  "body": "  Let X be a topological space and let ∼ be an equivalence relation on X. Let X\/∼ be the set of equivalence classes and let q: X → X\/∼ be the equivalence map (defined by q(p) := [p] for all p in X). The quotient topology, or identification topology on X\/∼ induced by ∼, is the topology 𝒯∼ = 𝒯quo:= {U ⊆ X\/∼ | q -1(U) is open in X}. The set X\/∼ together with the quotient topology is called a quotient space of X, and the equivalence map q is called the quotient map induced by ∼.   "
},
{
  "id": "prop-quotient-topology",
  "level": "2",
  "url": "sec-quotient-spaces.html#prop-quotient-topology",
  "type": "Proposition",
  "number": "2.31",
  "title": "",
  "body": "  The quotient topology is a topology.   "
},
{
  "id": "thm-293",
  "level": "2",
  "url": "sec-quotient-spaces.html#thm-293",
  "type": "Theorem",
  "number": "2.32",
  "title": "",
  "body": "     If X\/∼ is a quotient space of X and q: X → X\/∼ is the equivalence map (defined by q(p) := [p] for all p in X), then q is a continuous surjection.    The quotient topology induced by an equivalence relation is the largest topology on the set of equivalence classes for which the equivalence map is continuous.      "
},
{
  "id": "def-induced-quotient-topology",
  "level": "2",
  "url": "sec-quotient-spaces.html#def-induced-quotient-topology",
  "type": "Definition",
  "number": "2.33",
  "title": "",
  "body": "  Let (X,𝒯X) be a topological space, let Y be a set, and let f:X → Y be a surjective function. The quotient topology on Y induced by f is 𝒯q := {V ⊆ Y | f-1(V) ∈ 𝒯X}. If Y has the quotient topology induced by f then f is called a quotient map.   "
},
{
  "id": "prop-induced-quotient-topology",
  "level": "2",
  "url": "sec-quotient-spaces.html#prop-induced-quotient-topology",
  "type": "Proposition",
  "number": "2.34",
  "title": "",
  "body": "  The quotient topology induced by a function f is a topology.   "
},
{
  "id": "thm-298",
  "level": "2",
  "url": "sec-quotient-spaces.html#thm-298",
  "type": "Theorem",
  "number": "2.35",
  "title": "",
  "body": "     If f is a quotient map, then f is a continuous surjection.    The quotient topology induced by a map f is the largest topology on the codomain of f for which the map f is continuous.      "
},
{
  "id": "thm-2100",
  "level": "2",
  "url": "sec-quotient-spaces.html#thm-2100",
  "type": "Theorem",
  "number": "2.36",
  "title": "",
  "body": "  Let X be a topological space.   If ∼ is an equivalence relation on X, then the quotient topology on X\/∼ induced by ∼ equals the quotient topology on X\/∼ induced by the equivalence map q:X → X\/∼ (defined by q(p) := [p] for all p in X).    If f:X → Y is a surjection, then the quotient space (Y,𝒯f) is homeomorphic to the quotient space (X\/∼,𝒯∼) induced by the equivalence relation on X defined by x ∼ x' if and only if f(x) = f(x') for all x,x' ∈ X; moreover, the homeomorphism g:X\/∼ → Y satisfies g ∘ q = f, where q is the equivalence map.      "
},
{
  "id": "thm-2104",
  "level": "2",
  "url": "sec-quotient-spaces.html#thm-2104",
  "type": "Theorem",
  "number": "2.37",
  "title": "",
  "body": "  Let X = [0,1] have the Euclidean subspace topology, and let ∼ be the equivalence relation on X defined by p ∼ q if and only if either [p=q] or [{p,q} = {0,1}]. Then the quotient space X\/∼ is isomorphic to S1.   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "sec-quotient-spaces.html#example-4",
  "type": "Example",
  "number": "2.38",
  "title": "",
  "body": "    The torus T2 is the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (r,1) and (0,s) ∼ (1,s) for all r,s ∈ [0,1].    The Klein bottle K2 is the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (r,1) and (0,s) ∼ (1,1-s) for all r,s ∈ [0,1].    The Mobius band M2 is the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (1-r,1) for all r ∈ [0,1].    The projective plane P2 is the quotient space P2 := S2\/∼ where S2 := {(x,y,z) ∈ ℝ3 | x2 + y2 + z2 = 1} is the 2-sphere (with the Euclidean subspace topology) and ∼ is the equivalence relation generated by (x,y,z) ∼ (-x,-y,-z) for all (x,y,z) ∈ S2.     "
},
{
  "id": "thm-2110",
  "level": "2",
  "url": "sec-quotient-spaces.html#thm-2110",
  "type": "Theorem",
  "number": "2.39",
  "title": "",
  "body": "  Let X = [0,1] × [0,1] have the product topology (where each [0,1] has the Euclidean subspace topology).   The cylinder S1 × [0,1] is homeomorphic to the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (1,r) for all r ∈ [0,1].    The projective plane P2 is homeomorphic to the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (1-r,1) and (0,1-s) ∼ (1,s) for all r,s ∈ [0,1].    The 2-sphere S2 is homeomorphic to the quotient space X\/∼ where ∼ is the equivalence relation on X generated by (r,0) ∼ (0,r) and (s,1) ∼ (1,s) for all r,s ∈ [0,1].    The torus T2 is homeomorphic to the product space S1 × S1 where each S1 has the Euclidean subspace topology.      "
},
{
  "id": "thm-cfbt",
  "level": "2",
  "url": "sec-quotient-spaces.html#thm-cfbt",
  "type": "Theorem",
  "number": "2.40",
  "title": "",
  "body": "  Let X and Z be topological spaces, let ∼ be an equivalence relation on X, let q: X → X\/∼ be the equivalence map, and let X\/∼ have the quotient topology. Suppose that f: X → Z is a continuous function that is constant on equivalence classes. Then:   The map f induces a continuous function g: X\/∼ → Z with g ∘ q = f.    If f is onto then g is onto. If f is a quotient map, then g is a quotient map.    If [ f(x)=f(x') implies q(x)=q(x') for all x,x' ∈ X] then g is one-to-one.    If f is a quotient map and (3) holds then g is a homeomorphism.      "
},
{
  "id": "def-open-map",
  "level": "2",
  "url": "sec-quotient-spaces.html#def-open-map",
  "type": "Definition",
  "number": "2.41",
  "title": "",
  "body": "  Let X and Y be topological spaces. An open map from X to Y is a function f:X → Y such that for every open set V in X, the image f(V) is open in Y.   "
},
{
  "id": "prop-open-map-properties",
  "level": "2",
  "url": "sec-quotient-spaces.html#prop-open-map-properties",
  "type": "Proposition",
  "number": "2.42",
  "title": "",
  "body": "     A composition of open functions is open.    If Xα has the topology Tα for each α ∈ J, and ∏α ∈ J Xα has the product topology, then the projection map pβ : (∏α ∈ J Xα) → Xβ is open.      "
},
{
  "id": "thm-cq2",
  "level": "2",
  "url": "sec-quotient-spaces.html#thm-cq2",
  "type": "Theorem",
  "number": "2.43",
  "title": "",
  "body": "  If f: X → Z is continuous, onto, and open, then f is a quotient map.   "
},
{
  "id": "prop-2127",
  "level": "2",
  "url": "sec-quotient-spaces.html#prop-2127",
  "type": "Proposition",
  "number": "2.44",
  "title": "",
  "body": "  There exist quotient maps that are not open maps.   "
},
{
  "id": "def-topological-retraction",
  "level": "2",
  "url": "sec-quotient-spaces.html#def-topological-retraction",
  "type": "Definition",
  "number": "2.45",
  "title": "",
  "body": "  A retraction of a topological space X to a subspace A is a continuous function r:X → A satisfying r(a) = a for all a ∈ A.   "
},
{
  "id": "thm-cq3",
  "level": "2",
  "url": "sec-quotient-spaces.html#thm-cq3",
  "type": "Theorem",
  "number": "2.46",
  "title": "",
  "body": "  Every retraction is a quotient map.   "
},
{
  "id": "sec-compactness",
  "level": "1",
  "url": "sec-compactness.html",
  "type": "Section",
  "number": "3.1",
  "title": "Compactness",
  "body": "Compactness  Covers and the Extreme Value Theorem    Let X be a topological space. A collection 𝒞 of subsets of X is said to cover X, or to be a covering of X, if ∪C ∈ 𝒞 C = X. An open covering of a topological space X is a collection 𝒞 of open sets in X that covers X.      A topological space X is compact if every open covering of X contains a finite subcollection that also covers X.      Let X be a compact space, and let f: X → (ℝ,𝒯Eucl) be a continuous function. Then there exist c,d ∈ X such that for all p ∈ X, f(c) ≤ f(p) ≤ f(d).     Let 𝑋 be a finite topological space. Then 𝑋 is compact.    Construct an example of a compact subset of a topological space that is not closed.    Compact Interactions    Let A be a subspace of a topological space (X,𝒯X). The space A is compact if and only if for every collection 𝒞 of open sets in X satisfying A ⊆ ∪C ∈ 𝒞 C, there is a finite subcollection 𝒟 ⊆ 𝒞 such that A ⊆ ∪D ∈ 𝒟 D.      Thm 3.132: A continuous image of a compact space is compact. That is, if X,Y are topological spaces, and if X is compact and f: X → Y is a continuous surjective function, then Y is compact.      Compactness is a homeomorphism invariant.      If X is a compact space and X\/∼ is a quotient space, then X\/∼ is compact.      If A is a subspace of a compact space X and A is a closed subset in X, then A is compact.      Every compact subspace of a Hausdorff space is closed. That is, if Y is a compact subspace of a T2 space X, then Y is a closed subset of X.      If Y is a compact subspace of a T2 space X, and p ∈ X - Y, then there are disjoint open sets U,V in X satisfying p ∈ U and Y ⊆ V.      If X and Y are compact spaces, then the product space X × Y is compact.      If Xα is a compact space for all α, then the product space ∏α Xα is compact.      If X and Y are spaces, p ∈ X, Y is compact, and N is an open set in the product space X × Y containing {p} × Y, then there is an open set W in X such that {p} × Y ⊆ W × Y ⊆ N.     Compactness is not preserved by non-closed subspaces or continuous preimages.    "
},
{
  "id": "def-cover",
  "level": "2",
  "url": "sec-compactness.html#def-cover",
  "type": "Definition",
  "number": "3.1",
  "title": "",
  "body": "  Let X be a topological space. A collection 𝒞 of subsets of X is said to cover X, or to be a covering of X, if ∪C ∈ 𝒞 C = X. An open covering of a topological space X is a collection 𝒞 of open sets in X that covers X.   "
},
{
  "id": "def-compact",
  "level": "2",
  "url": "sec-compactness.html#def-compact",
  "type": "Definition",
  "number": "3.2",
  "title": "",
  "body": "  A topological space X is compact if every open covering of X contains a finite subcollection that also covers X.   "
},
{
  "id": "thm-evt",
  "level": "2",
  "url": "sec-compactness.html#thm-evt",
  "type": "Theorem",
  "number": "3.3",
  "title": "",
  "body": "  Let X be a compact space, and let f: X → (ℝ,𝒯Eucl) be a continuous function. Then there exist c,d ∈ X such that for all p ∈ X, f(c) ≤ f(p) ≤ f(d).   "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "sec-compactness.html#exercise-17",
  "type": "Exploration",
  "number": "3.4",
  "title": "",
  "body": " Let 𝑋 be a finite topological space. Then 𝑋 is compact.  "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "sec-compactness.html#exercise-18",
  "type": "Exploration",
  "number": "3.5",
  "title": "",
  "body": " Construct an example of a compact subset of a topological space that is not closed.  "
},
{
  "id": "thm-3128",
  "level": "2",
  "url": "sec-compactness.html#thm-3128",
  "type": "Theorem",
  "number": "3.6",
  "title": "",
  "body": "  Let A be a subspace of a topological space (X,𝒯X). The space A is compact if and only if for every collection 𝒞 of open sets in X satisfying A ⊆ ∪C ∈ 𝒞 C, there is a finite subcollection 𝒟 ⊆ 𝒞 such that A ⊆ ∪D ∈ 𝒟 D.   "
},
{
  "id": "thm-3132",
  "level": "2",
  "url": "sec-compactness.html#thm-3132",
  "type": "Theorem",
  "number": "3.7",
  "title": "",
  "body": "  Thm 3.132: A continuous image of a compact space is compact. That is, if X,Y are topological spaces, and if X is compact and f: X → Y is a continuous surjective function, then Y is compact.   "
},
{
  "id": "cor-3133",
  "level": "2",
  "url": "sec-compactness.html#cor-3133",
  "type": "Corollary",
  "number": "3.8",
  "title": "",
  "body": "  Compactness is a homeomorphism invariant.   "
},
{
  "id": "cor-3134",
  "level": "2",
  "url": "sec-compactness.html#cor-3134",
  "type": "Corollary",
  "number": "3.9",
  "title": "",
  "body": "  If X is a compact space and X\/∼ is a quotient space, then X\/∼ is compact.   "
},
{
  "id": "thm-3138",
  "level": "2",
  "url": "sec-compactness.html#thm-3138",
  "type": "Theorem",
  "number": "3.10",
  "title": "",
  "body": "  If A is a subspace of a compact space X and A is a closed subset in X, then A is compact.   "
},
{
  "id": "thm-3139",
  "level": "2",
  "url": "sec-compactness.html#thm-3139",
  "type": "Theorem",
  "number": "3.11",
  "title": "",
  "body": "  Every compact subspace of a Hausdorff space is closed. That is, if Y is a compact subspace of a T2 space X, then Y is a closed subset of X.   "
},
{
  "id": "cor-3142",
  "level": "2",
  "url": "sec-compactness.html#cor-3142",
  "type": "Corollary",
  "number": "3.12",
  "title": "",
  "body": "  If Y is a compact subspace of a T2 space X, and p ∈ X - Y, then there are disjoint open sets U,V in X satisfying p ∈ U and Y ⊆ V.   "
},
{
  "id": "lem-3145",
  "level": "2",
  "url": "sec-compactness.html#lem-3145",
  "type": "Lemma",
  "number": "3.13",
  "title": "",
  "body": "  If X and Y are compact spaces, then the product space X × Y is compact.   "
},
{
  "id": "thm-tychonoff",
  "level": "2",
  "url": "sec-compactness.html#thm-tychonoff",
  "type": "Theorem",
  "number": "3.14",
  "title": "",
  "body": "  If Xα is a compact space for all α, then the product space ∏α Xα is compact.   "
},
{
  "id": "lem-tube-lemma",
  "level": "2",
  "url": "sec-compactness.html#lem-tube-lemma",
  "type": "Lemma",
  "number": "3.15",
  "title": "",
  "body": "  If X and Y are spaces, p ∈ X, Y is compact, and N is an open set in the product space X × Y containing {p} × Y, then there is an open set W in X such that {p} × Y ⊆ W × Y ⊆ N.   "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "sec-compactness.html#remark-5",
  "type": "Remark",
  "number": "3.16",
  "title": "",
  "body": " Compactness is not preserved by non-closed subspaces or continuous preimages.  "
},
{
  "id": "sec-separability",
  "level": "1",
  "url": "sec-separability.html",
  "type": "Section",
  "number": "3.2",
  "title": "Separability",
  "body": "Separability    A space (X,𝒯X) has a countable basis if the topology 𝒯X is generated by a basis that is a countable set.      A countable basis is a homeomorphism invariant.      The property of having a topology generated by a countable basis is preserved by subspaces and countable products.      Let X be a topological space.   X is T1 if for any points a,b ∈ X with a ≠ b, there are open sets U,V in X with a ∈ U, b ∉ U, a ∉ V, and b ∈ V.    X is T2, or Hausdorff, if for any points a,b ∈ X with a ≠ b, there are open sets U,V in X with U ∩ V = ∅, a ∈ U, and b ∈ V.    X is T3 if X is T1 and for any point a ∈ X and closed set B in X with a ∉ B, there are open sets U,V in X with U ∩ V = ∅, a ∈ U, and B ⊆ V.    X is T4 if X is T1 and for any closed sets A,B in X with A ∩ B = ∅, there are open sets U,V in X with U ∩ V = ∅, A ⊆ U, and B ⊆ V.        If X is a T1 space, then T3 is also called regular and T4 is also called normal.       Let 𝑋 be a space with the finite complement topology. Show that 𝑋 is 𝑇1.    Show that ℝstd is Hausdorff.          Describe an example of a topological space that is 𝑇1 but not 𝑇2.    Describe an example of a topological space that is 𝑇2 but not 𝑇3.    Describe an example of a topological space that is 𝑇3 but not 𝑇4.        For each 1 ≤ i ≤ 4, the property Ti is a homeomorphism invariant.      A space X is T1 if and only if all one-points sets are closed in X.      For each 2 ≤ i ≤ 4, the property Ti implies the property Ti-1, but the converse fails.      T2 and T3 are preserved by subspaces and products.     T2 and T3 are not preserved by quotients. T4 is not preserved by subspaces, products, or quotients.     A space X is T3 iff X is T1 and for all x ∈ X and open U in X with x ∈ U, there is an open set V in X with x ∈ V ⊆ ClX(V) ⊆ U.      A space X is T4 iff X is T1 and for all closed A and open U in X with A ⊆ U, there is an open set V in X with A ⊆ V ⊆ ClX(V) ⊆ U.      A continuous bijection from a compact space to a Hausdorff space is a homeomorphism.      Let X be a compact space, let ∼ be an equivalence relation on X, and let X\/∼ be the quotient space. If Z is a T2 space and f: X → Z is a continuous surjection satisfying [f(p) = f(q) if and only if p ∼ q] for all p,q ∈ X, then the function g: X\/∼ → Z defined by g([p]) := f(p) for all [p] ∈ X\/∼ is a homeomorphism.      If X is a compact space, Y is a T2 space, and f: X → Y is a surjective continuous function, then f is a quotient map.      Compact Hausdorff spaces are T4. (The converse is not true.)      A T3 space with a countable basis is T4.    "
},
{
  "id": "def-countable-basis",
  "level": "2",
  "url": "sec-separability.html#def-countable-basis",
  "type": "Definition",
  "number": "3.17",
  "title": "",
  "body": "  A space (X,𝒯X) has a countable basis if the topology 𝒯X is generated by a basis that is a countable set.   "
},
{
  "id": "thm-3171",
  "level": "2",
  "url": "sec-separability.html#thm-3171",
  "type": "Theorem",
  "number": "3.18",
  "title": "",
  "body": "  A countable basis is a homeomorphism invariant.   "
},
{
  "id": "thm-3172",
  "level": "2",
  "url": "sec-separability.html#thm-3172",
  "type": "Theorem",
  "number": "3.19",
  "title": "",
  "body": "  The property of having a topology generated by a countable basis is preserved by subspaces and countable products.   "
},
{
  "id": "def-tn",
  "level": "2",
  "url": "sec-separability.html#def-tn",
  "type": "Definition",
  "number": "3.20",
  "title": "",
  "body": "  Let X be a topological space.   X is T1 if for any points a,b ∈ X with a ≠ b, there are open sets U,V in X with a ∈ U, b ∉ U, a ∉ V, and b ∈ V.    X is T2, or Hausdorff, if for any points a,b ∈ X with a ≠ b, there are open sets U,V in X with U ∩ V = ∅, a ∈ U, and b ∈ V.    X is T3 if X is T1 and for any point a ∈ X and closed set B in X with a ∉ B, there are open sets U,V in X with U ∩ V = ∅, a ∈ U, and B ⊆ V.    X is T4 if X is T1 and for any closed sets A,B in X with A ∩ B = ∅, there are open sets U,V in X with U ∩ V = ∅, A ⊆ U, and B ⊆ V.      "
},
{
  "id": "convention-4",
  "level": "2",
  "url": "sec-separability.html#convention-4",
  "type": "Convention",
  "number": "3.21",
  "title": "",
  "body": " If X is a T1 space, then T3 is also called regular and T4 is also called normal.  "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "sec-separability.html#exercise-19",
  "type": "Exploration",
  "number": "3.22",
  "title": "",
  "body": "    Let 𝑋 be a space with the finite complement topology. Show that 𝑋 is 𝑇1.    Show that ℝstd is Hausdorff.     "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "sec-separability.html#exercise-20",
  "type": "Exploration",
  "number": "3.23",
  "title": "",
  "body": "    Describe an example of a topological space that is 𝑇1 but not 𝑇2.    Describe an example of a topological space that is 𝑇2 but not 𝑇3.    Describe an example of a topological space that is 𝑇3 but not 𝑇4.     "
},
{
  "id": "thm-3183",
  "level": "2",
  "url": "sec-separability.html#thm-3183",
  "type": "Theorem",
  "number": "3.24",
  "title": "",
  "body": "  For each 1 ≤ i ≤ 4, the property Ti is a homeomorphism invariant.   "
},
{
  "id": "prop-t1-characterization",
  "level": "2",
  "url": "sec-separability.html#prop-t1-characterization",
  "type": "Proposition",
  "number": "3.25",
  "title": "",
  "body": "  A space X is T1 if and only if all one-points sets are closed in X.   "
},
{
  "id": "thm-3186",
  "level": "2",
  "url": "sec-separability.html#thm-3186",
  "type": "Theorem",
  "number": "3.26",
  "title": "",
  "body": "  For each 2 ≤ i ≤ 4, the property Ti implies the property Ti-1, but the converse fails.   "
},
{
  "id": "thm-3190",
  "level": "2",
  "url": "sec-separability.html#thm-3190",
  "type": "Theorem",
  "number": "3.27",
  "title": "",
  "body": "  T2 and T3 are preserved by subspaces and products.   "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "sec-separability.html#remark-6",
  "type": "Remark",
  "number": "3.28",
  "title": "",
  "body": " T2 and T3 are not preserved by quotients. T4 is not preserved by subspaces, products, or quotients.  "
},
{
  "id": "thm-3194",
  "level": "2",
  "url": "sec-separability.html#thm-3194",
  "type": "Theorem",
  "number": "3.29",
  "title": "",
  "body": "  A space X is T3 iff X is T1 and for all x ∈ X and open U in X with x ∈ U, there is an open set V in X with x ∈ V ⊆ ClX(V) ⊆ U.   "
},
{
  "id": "thm-3195",
  "level": "2",
  "url": "sec-separability.html#thm-3195",
  "type": "Theorem",
  "number": "3.30",
  "title": "",
  "body": "  A space X is T4 iff X is T1 and for all closed A and open U in X with A ⊆ U, there is an open set V in X with A ⊆ V ⊆ ClX(V) ⊆ U.   "
},
{
  "id": "thm-vut",
  "level": "2",
  "url": "sec-separability.html#thm-vut",
  "type": "Theorem",
  "number": "3.31",
  "title": "",
  "body": "  A continuous bijection from a compact space to a Hausdorff space is a homeomorphism.   "
},
{
  "id": "thm-ch-hbt",
  "level": "2",
  "url": "sec-separability.html#thm-ch-hbt",
  "type": "Theorem",
  "number": "3.32",
  "title": "",
  "body": "  Let X be a compact space, let ∼ be an equivalence relation on X, and let X\/∼ be the quotient space. If Z is a T2 space and f: X → Z is a continuous surjection satisfying [f(p) = f(q) if and only if p ∼ q] for all p,q ∈ X, then the function g: X\/∼ → Z defined by g([p]) := f(p) for all [p] ∈ X\/∼ is a homeomorphism.   "
},
{
  "id": "thm-3153",
  "level": "2",
  "url": "sec-separability.html#thm-3153",
  "type": "Theorem",
  "number": "3.33",
  "title": "",
  "body": "  If X is a compact space, Y is a T2 space, and f: X → Y is a surjective continuous function, then f is a quotient map.   "
},
{
  "id": "thm-3200",
  "level": "2",
  "url": "sec-separability.html#thm-3200",
  "type": "Theorem",
  "number": "3.34",
  "title": "",
  "body": "  Compact Hausdorff spaces are T4. (The converse is not true.)   "
},
{
  "id": "thm-3202",
  "level": "2",
  "url": "sec-separability.html#thm-3202",
  "type": "Theorem",
  "number": "3.35",
  "title": "",
  "body": "  A T3 space with a countable basis is T4.   "
},
{
  "id": "sec-metrizability",
  "level": "1",
  "url": "sec-metrizability.html",
  "type": "Section",
  "number": "3.3",
  "title": "Metrizability",
  "body": "Metrizability    A metric on a set X is a function d: X × X → ℝ satisfying the following for all x,y,z ∈ X: (1) d(x,y) ≥ 0, and d(x,y) = 0 if and only if x = y. (2) d(x,y) = d(y,x). (3) d(x,z) ≤ d(x,y) + d(y,z). The pair (X,d) is a metric space, and for any x,y ∈ X the real number d(x,y) is the distance from x to y.      Let d be a metric on a set X. For any p ∈ X and r ∈ ℝ with r > 0, the ball of radius r centered at p is Bd(p,r) := {q ∈ X | d(p,q) < r}.      The metric basis on X induced by d is the collection ℬd := {Bd(p,r) | p ∈ X and r > 0}. The metric topology on X induced by d is the topology 𝒯d := 𝒯(ℬd) generated by the metric basis.      Let (X,d) be a metric space. The metric basis on X is a basis, and hence the metric topology is a topology.      Let (X,d) be a metric space, let X have the metric topology, and let X × X have the product topology Then the metric function d: X × X → (ℝ,𝒯Eucl) is continuous.      A topological space (X,𝒯X) is metrizable if there is a metric d on X such that 𝒯X = 𝒯d (where 𝒯d is the metric topology on X induced by d).      Metrizability is a homeomorphism invariant.         If X is a metrizable space and Y is a subspace of X, then Y is metrizable.    If X and Y are metrizable spaces, then the product space X × Y is metrizable.        Metrizability is not preserved by quotients, continuous images, or continuous preimages.     Metrizable spaces are T2.      If X is a compact metrizable space and 𝒞 is an open covering of X, then there is a real number s > 0 such that whenever A is a subset of X with diameter > s, then there is an open set U in 𝒞 with A ⊆ U.         If (X,𝒯X) is a compact and metrizable space, then 𝒯X is generated by a countable basis.    Metrizability does not imply a countable basis.         Metrizable spaces are T4. (The converse is not true.)      Let X be a T1 space. The following are equivalent:   X is T4.    Whenever A and B are disjoint closed subsets of X, there is a continuous function f : X → [0,1] such that f(A) = {0} and f(B) = {1}.         If X is a T3 space with a countable basis, then X is metrizable.      Let X be compact. Then X is metrizable if and only if X is T2 and has a countable basis.    "
},
{
  "id": "def-metric-space",
  "level": "2",
  "url": "sec-metrizability.html#def-metric-space",
  "type": "Definition",
  "number": "3.36",
  "title": "",
  "body": "  A metric on a set X is a function d: X × X → ℝ satisfying the following for all x,y,z ∈ X: (1) d(x,y) ≥ 0, and d(x,y) = 0 if and only if x = y. (2) d(x,y) = d(y,x). (3) d(x,z) ≤ d(x,y) + d(y,z). The pair (X,d) is a metric space, and for any x,y ∈ X the real number d(x,y) is the distance from x to y.   "
},
{
  "id": "def-ball",
  "level": "2",
  "url": "sec-metrizability.html#def-ball",
  "type": "Definition",
  "number": "3.37",
  "title": "",
  "body": "  Let d be a metric on a set X. For any p ∈ X and r ∈ ℝ with r > 0, the ball of radius r centered at p is Bd(p,r) := {q ∈ X | d(p,q) < r}.   "
},
{
  "id": "def-metric-basis",
  "level": "2",
  "url": "sec-metrizability.html#def-metric-basis",
  "type": "Definition",
  "number": "3.38",
  "title": "",
  "body": "  The metric basis on X induced by d is the collection ℬd := {Bd(p,r) | p ∈ X and r > 0}. The metric topology on X induced by d is the topology 𝒯d := 𝒯(ℬd) generated by the metric basis.   "
},
{
  "id": "prop-324",
  "level": "2",
  "url": "sec-metrizability.html#prop-324",
  "type": "Proposition",
  "number": "3.39",
  "title": "",
  "body": "  Let (X,d) be a metric space. The metric basis on X is a basis, and hence the metric topology is a topology.   "
},
{
  "id": "thm-325",
  "level": "2",
  "url": "sec-metrizability.html#thm-325",
  "type": "Theorem",
  "number": "3.40",
  "title": "",
  "body": "  Let (X,d) be a metric space, let X have the metric topology, and let X × X have the product topology Then the metric function d: X × X → (ℝ,𝒯Eucl) is continuous.   "
},
{
  "id": "def-metrizable",
  "level": "2",
  "url": "sec-metrizability.html#def-metrizable",
  "type": "Definition",
  "number": "3.41",
  "title": "",
  "body": "  A topological space (X,𝒯X) is metrizable if there is a metric d on X such that 𝒯X = 𝒯d (where 𝒯d is the metric topology on X induced by d).   "
},
{
  "id": "thm-metrizable-inv",
  "level": "2",
  "url": "sec-metrizability.html#thm-metrizable-inv",
  "type": "Theorem",
  "number": "3.42",
  "title": "",
  "body": "  Metrizability is a homeomorphism invariant.   "
},
{
  "id": "thm-330",
  "level": "2",
  "url": "sec-metrizability.html#thm-330",
  "type": "Theorem",
  "number": "3.43",
  "title": "",
  "body": "     If X is a metrizable space and Y is a subspace of X, then Y is metrizable.    If X and Y are metrizable spaces, then the product space X × Y is metrizable.      "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "sec-metrizability.html#remark-7",
  "type": "Remark",
  "number": "3.44",
  "title": "",
  "body": " Metrizability is not preserved by quotients, continuous images, or continuous preimages.  "
},
{
  "id": "thm-333",
  "level": "2",
  "url": "sec-metrizability.html#thm-333",
  "type": "Theorem",
  "number": "3.45",
  "title": "",
  "body": "  Metrizable spaces are T2.   "
},
{
  "id": "thm-lebesque-number-lemma",
  "level": "2",
  "url": "sec-metrizability.html#thm-lebesque-number-lemma",
  "type": "Theorem",
  "number": "3.46",
  "title": "",
  "body": "  If X is a compact metrizable space and 𝒞 is an open covering of X, then there is a real number s > 0 such that whenever A is a subset of X with diameter > s, then there is an open set U in 𝒞 with A ⊆ U.   "
},
{
  "id": "thm-3174",
  "level": "2",
  "url": "sec-metrizability.html#thm-3174",
  "type": "Theorem",
  "number": "3.47",
  "title": "",
  "body": "     If (X,𝒯X) is a compact and metrizable space, then 𝒯X is generated by a countable basis.    Metrizability does not imply a countable basis.      "
},
{
  "id": "thm-3198",
  "level": "2",
  "url": "sec-metrizability.html#thm-3198",
  "type": "Theorem",
  "number": "3.48",
  "title": "",
  "body": "  Metrizable spaces are T4. (The converse is not true.)   "
},
{
  "id": "thm-urysohns-lemma",
  "level": "2",
  "url": "sec-metrizability.html#thm-urysohns-lemma",
  "type": "Theorem",
  "number": "3.49",
  "title": "",
  "body": "  Let X be a T1 space. The following are equivalent:   X is T4.    Whenever A and B are disjoint closed subsets of X, there is a continuous function f : X → [0,1] such that f(A) = {0} and f(B) = {1}.      "
},
{
  "id": "thm-urysohn-metrization",
  "level": "2",
  "url": "sec-metrizability.html#thm-urysohn-metrization",
  "type": "Theorem",
  "number": "3.50",
  "title": "",
  "body": "  If X is a T3 space with a countable basis, then X is metrizable.   "
},
{
  "id": "thm-3210",
  "level": "2",
  "url": "sec-metrizability.html#thm-3210",
  "type": "Theorem",
  "number": "3.51",
  "title": "",
  "body": "  Let X be compact. Then X is metrizable if and only if X is T2 and has a countable basis.   "
},
{
  "id": "sec-connectedness",
  "level": "1",
  "url": "sec-connectedness.html",
  "type": "Section",
  "number": "3.4",
  "title": "Connectedness",
  "body": "Connectedness    A topological space X is connected if whenever U and V are open sets in X satisfying U ∪ V = X and U ∩ V = ∅, then either U = ∅ or V = ∅.      A disconnection of a space X is a pair U,V of nonempty disjoint open sets in X whose union is X.      Let X be a connected space, and let f: X → (ℝ,𝒯Eucl) be a continuous function. If p,q ∈ X and r ∈ ℝ satifies f(p) < r < f(q), then there is an x ∈ X with f(x)=r.      A space X is connected if and only if the subsets of X that are both open and closed in X are X and ∅.    interactions    A continuous image of a connected space is connected. That is, if X,Y are topological spaces, and if X is connected and f: X → Y is a continuous function, then the subspace f(X) of Y is connected.      Connectedness is a homeomorphism invariant.      If X is a connected space and X\/∼ is a quotient space, then X\/∼ is connected.      If X and Y are connected spaces, then the product space X × Y is connected.     Connectedness is not preserved by subspaces or continuous preimages.     Let X be a topological space and suppose that X = ∪ Xα and ∩ Xα ≠ ∅. If Xα is a connected subspace of X for all α, then X is connected.      If Y is a connected subspace of a space X and if U,V are a disconnection of X, then either Y ⊆ U or Y ⊆ V.      A subspace Y of (ℝ,𝒯Eucl) is connected if and only if Y is either an interval, a ray, or ℝ.      ℝ and ℝn (with n ≥ 2) with the Euclidean topology are not homeomorphic.      Let (X,𝒯X) and (Y,𝒯Y) be topological spaces with X ∩ Y = ∅. The disjoint union topology on X ∪ Y is 𝒯∐ = { U ∪ V | U ∈ 𝒯X and V ∈ 𝒯Y }.      Let X and Y be topological spaces with X ∩ Y = ∅, and let x0 ∈ X and y0 ∈ Y. Let Z := X ∪ Y have the disjoint union topology. Define ∼ to be the minimal equivalence relation on Z such that x0 ~ y0, and let Z\/∼ be the corresponding quotient space. Then:   There are embeddings X → Z\/∼ and Y → Z\/∼.    If X and Y are connected, then Z\/∼ is connected.        Let I denote the topological space [0,1] with the Euclidean subspace topology.     Let X be a topological space and let p,q ∈ X. A path in X from p to q is a continuous function f: I → X such that f(0) = p and f(1) = q.      A space X is path-connected, or PC, if and only if for all p,q ∈ X, there is a continuous function f: I → X such that f(0) = p and f(1) = q (that is, there is a path from p to q).      A continuous image of a path-connected space is path-connected.      Path-connectedness is a homeomorphism invariant.         f Xα is a path-connected space for all α, then the product space ∏α Xα is path-connected.    If X is a path-connected space and ∼ is an equivalence relation on X, then the quotient space X\/∼ is path-connected.        Path-connectedness is not preserved by subspaces or continuous preimages.     Let X be a topological space and suppose that X = ∪ Xα and ∩ Xα ≠ ∅. If Xα is PC subspace of X for all α, then X is PC.      If X is a path-connected space, then X is connected.      The flea and comb space is the subset X := {(0,1)} ∪ (I × {0}) ∪ (∪n ∈ ℕ {1\/n} × I) of ℝ2 with the Euclidean subspace topology. The point (0,1) is the flea and the subspace X - {(0,1)} is the comb.      Connectedness does not imply path-connectedness. In particular, the flea-and-comb space is connected but not path-connected.      A subspace Y of (ℝ,𝒯Eucl) is path-connected iff Y is either an interval, ray, or ℝ.      Let X be a topological space, and let ∼cc be the equivalence relation on X defined by [p ∼cc q if and only if there is a connected subspace A of X with p,q ∈ A]. A connected component of A is an equivalence class for the relation ∼cc.      Let X be a topological space, and let ∼pc be the equivalence relation on X defined by [p ∼pc q if and only if there is a path in X from p to q]. A path component of A is an equivalence class for the relation ∼pc.      ∼cc and ∼pc are equivalence relations.      Let X be a topological space. Then X is a disjoint union of its connected components. Moreover, each connected component is a disjoint union of path components.         The number (cardinality) of connected components is a homeomorphism invariant.    The number (cardinality) of path components is a homeomorphism invariant.       "
},
{
  "id": "def-connected",
  "level": "2",
  "url": "sec-connectedness.html#def-connected",
  "type": "Definition",
  "number": "3.52",
  "title": "",
  "body": "  A topological space X is connected if whenever U and V are open sets in X satisfying U ∪ V = X and U ∩ V = ∅, then either U = ∅ or V = ∅.   "
},
{
  "id": "def-disconnection",
  "level": "2",
  "url": "sec-connectedness.html#def-disconnection",
  "type": "Definition",
  "number": "3.53",
  "title": "",
  "body": "  A disconnection of a space X is a pair U,V of nonempty disjoint open sets in X whose union is X.   "
},
{
  "id": "thm-ivt",
  "level": "2",
  "url": "sec-connectedness.html#thm-ivt",
  "type": "Theorem",
  "number": "3.54",
  "title": "",
  "body": "  Let X be a connected space, and let f: X → (ℝ,𝒯Eucl) be a continuous function. If p,q ∈ X and r ∈ ℝ satifies f(p) < r < f(q), then there is an x ∈ X with f(x)=r.   "
},
{
  "id": "thm-346",
  "level": "2",
  "url": "sec-connectedness.html#thm-346",
  "type": "Theorem",
  "number": "3.55",
  "title": "",
  "body": "  A space X is connected if and only if the subsets of X that are both open and closed in X are X and ∅.   "
},
{
  "id": "thm-349",
  "level": "2",
  "url": "sec-connectedness.html#thm-349",
  "type": "Theorem",
  "number": "3.56",
  "title": "",
  "body": "  A continuous image of a connected space is connected. That is, if X,Y are topological spaces, and if X is connected and f: X → Y is a continuous function, then the subspace f(X) of Y is connected.   "
},
{
  "id": "cor-350",
  "level": "2",
  "url": "sec-connectedness.html#cor-350",
  "type": "Corollary",
  "number": "3.57",
  "title": "",
  "body": "  Connectedness is a homeomorphism invariant.   "
},
{
  "id": "cor-351",
  "level": "2",
  "url": "sec-connectedness.html#cor-351",
  "type": "Corollary",
  "number": "3.58",
  "title": "",
  "body": "  If X is a connected space and X\/∼ is a quotient space, then X\/∼ is connected.   "
},
{
  "id": "thm-354",
  "level": "2",
  "url": "sec-connectedness.html#thm-354",
  "type": "Theorem",
  "number": "3.59",
  "title": "",
  "body": "  If X and Y are connected spaces, then the product space X × Y is connected.   "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "sec-connectedness.html#remark-8",
  "type": "Remark",
  "number": "3.60",
  "title": "",
  "body": " Connectedness is not preserved by subspaces or continuous preimages.  "
},
{
  "id": "prop-357",
  "level": "2",
  "url": "sec-connectedness.html#prop-357",
  "type": "Proposition",
  "number": "3.61",
  "title": "",
  "body": "  Let X be a topological space and suppose that X = ∪ Xα and ∩ Xα ≠ ∅. If Xα is a connected subspace of X for all α, then X is connected.   "
},
{
  "id": "prop-360",
  "level": "2",
  "url": "sec-connectedness.html#prop-360",
  "type": "Proposition",
  "number": "3.62",
  "title": "",
  "body": "  If Y is a connected subspace of a space X and if U,V are a disconnection of X, then either Y ⊆ U or Y ⊆ V.   "
},
{
  "id": "thm-363",
  "level": "2",
  "url": "sec-connectedness.html#thm-363",
  "type": "Theorem",
  "number": "3.63",
  "title": "",
  "body": "  A subspace Y of (ℝ,𝒯Eucl) is connected if and only if Y is either an interval, a ray, or ℝ.   "
},
{
  "id": "prop-364",
  "level": "2",
  "url": "sec-connectedness.html#prop-364",
  "type": "Proposition",
  "number": "3.64",
  "title": "",
  "body": "  ℝ and ℝn (with n ≥ 2) with the Euclidean topology are not homeomorphic.   "
},
{
  "id": "def-disjoint-union-topology",
  "level": "2",
  "url": "sec-connectedness.html#def-disjoint-union-topology",
  "type": "Definition",
  "number": "3.65",
  "title": "",
  "body": "  Let (X,𝒯X) and (Y,𝒯Y) be topological spaces with X ∩ Y = ∅. The disjoint union topology on X ∪ Y is 𝒯∐ = { U ∪ V | U ∈ 𝒯X and V ∈ 𝒯Y }.   "
},
{
  "id": "thm-367",
  "level": "2",
  "url": "sec-connectedness.html#thm-367",
  "type": "Theorem",
  "number": "3.66",
  "title": "",
  "body": "  Let X and Y be topological spaces with X ∩ Y = ∅, and let x0 ∈ X and y0 ∈ Y. Let Z := X ∪ Y have the disjoint union topology. Define ∼ to be the minimal equivalence relation on Z such that x0 ~ y0, and let Z\/∼ be the corresponding quotient space. Then:   There are embeddings X → Z\/∼ and Y → Z\/∼.    If X and Y are connected, then Z\/∼ is connected.      "
},
{
  "id": "convention-5",
  "level": "2",
  "url": "sec-connectedness.html#convention-5",
  "type": "Convention",
  "number": "3.67",
  "title": "",
  "body": " Let I denote the topological space [0,1] with the Euclidean subspace topology.  "
},
{
  "id": "def-path",
  "level": "2",
  "url": "sec-connectedness.html#def-path",
  "type": "Definition",
  "number": "3.68",
  "title": "",
  "body": "  Let X be a topological space and let p,q ∈ X. A path in X from p to q is a continuous function f: I → X such that f(0) = p and f(1) = q.   "
},
{
  "id": "def-path-connected",
  "level": "2",
  "url": "sec-connectedness.html#def-path-connected",
  "type": "Definition",
  "number": "3.69",
  "title": "",
  "body": "  A space X is path-connected, or PC, if and only if for all p,q ∈ X, there is a continuous function f: I → X such that f(0) = p and f(1) = q (that is, there is a path from p to q).   "
},
{
  "id": "thm-375",
  "level": "2",
  "url": "sec-connectedness.html#thm-375",
  "type": "Theorem",
  "number": "3.70",
  "title": "",
  "body": "  A continuous image of a path-connected space is path-connected.   "
},
{
  "id": "cor-376",
  "level": "2",
  "url": "sec-connectedness.html#cor-376",
  "type": "Corollary",
  "number": "3.71",
  "title": "",
  "body": "  Path-connectedness is a homeomorphism invariant.   "
},
{
  "id": "thm-380",
  "level": "2",
  "url": "sec-connectedness.html#thm-380",
  "type": "Theorem",
  "number": "3.72",
  "title": "",
  "body": "     f Xα is a path-connected space for all α, then the product space ∏α Xα is path-connected.    If X is a path-connected space and ∼ is an equivalence relation on X, then the quotient space X\/∼ is path-connected.      "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "sec-connectedness.html#remark-9",
  "type": "Remark",
  "number": "3.73",
  "title": "",
  "body": " Path-connectedness is not preserved by subspaces or continuous preimages.  "
},
{
  "id": "thm-383",
  "level": "2",
  "url": "sec-connectedness.html#thm-383",
  "type": "Theorem",
  "number": "3.74",
  "title": "",
  "body": "  Let X be a topological space and suppose that X = ∪ Xα and ∩ Xα ≠ ∅. If Xα is PC subspace of X for all α, then X is PC.   "
},
{
  "id": "thm-390",
  "level": "2",
  "url": "sec-connectedness.html#thm-390",
  "type": "Theorem",
  "number": "3.75",
  "title": "",
  "body": "  If X is a path-connected space, then X is connected.   "
},
{
  "id": "def-flea-comb",
  "level": "2",
  "url": "sec-connectedness.html#def-flea-comb",
  "type": "Example",
  "number": "3.76",
  "title": "",
  "body": "  The flea and comb space is the subset X := {(0,1)} ∪ (I × {0}) ∪ (∪n ∈ ℕ {1\/n} × I) of ℝ2 with the Euclidean subspace topology. The point (0,1) is the flea and the subspace X - {(0,1)} is the comb.   "
},
{
  "id": "thm-394",
  "level": "2",
  "url": "sec-connectedness.html#thm-394",
  "type": "Theorem",
  "number": "3.77",
  "title": "",
  "body": "  Connectedness does not imply path-connectedness. In particular, the flea-and-comb space is connected but not path-connected.   "
},
{
  "id": "thm-396",
  "level": "2",
  "url": "sec-connectedness.html#thm-396",
  "type": "Theorem",
  "number": "3.78",
  "title": "",
  "body": "  A subspace Y of (ℝ,𝒯Eucl) is path-connected iff Y is either an interval, ray, or ℝ.   "
},
{
  "id": "def-connected-component",
  "level": "2",
  "url": "sec-connectedness.html#def-connected-component",
  "type": "Definition",
  "number": "3.79",
  "title": "",
  "body": "  Let X be a topological space, and let ∼cc be the equivalence relation on X defined by [p ∼cc q if and only if there is a connected subspace A of X with p,q ∈ A]. A connected component of A is an equivalence class for the relation ∼cc.   "
},
{
  "id": "def-path-component",
  "level": "2",
  "url": "sec-connectedness.html#def-path-component",
  "type": "Definition",
  "number": "3.80",
  "title": "",
  "body": "  Let X be a topological space, and let ∼pc be the equivalence relation on X defined by [p ∼pc q if and only if there is a path in X from p to q]. A path component of A is an equivalence class for the relation ∼pc.   "
},
{
  "id": "prop-3104",
  "level": "2",
  "url": "sec-connectedness.html#prop-3104",
  "type": "Proposition",
  "number": "3.81",
  "title": "",
  "body": "  ∼cc and ∼pc are equivalence relations.   "
},
{
  "id": "thm-3105",
  "level": "2",
  "url": "sec-connectedness.html#thm-3105",
  "type": "Theorem",
  "number": "3.82",
  "title": "",
  "body": "  Let X be a topological space. Then X is a disjoint union of its connected components. Moreover, each connected component is a disjoint union of path components.   "
},
{
  "id": "thm-3108",
  "level": "2",
  "url": "sec-connectedness.html#thm-3108",
  "type": "Theorem",
  "number": "3.83",
  "title": "",
  "body": "     The number (cardinality) of connected components is a homeomorphism invariant.    The number (cardinality) of path components is a homeomorphism invariant.      "
},
{
  "id": "sec-retracts",
  "level": "1",
  "url": "sec-retracts.html",
  "type": "Section",
  "number": "4.1",
  "title": "Retracts",
  "body": "Retracts    Let A be a subspace of a topological space X. The space A is a retract of X if there is a continuous function r: X → A satisfying r(a) = a for all a ∈ A.  The function r is called a retraction from X to A.      Let Y be a subspace of a topological space X. A deformation retraction of X onto Y is a family of maps ft: X → X for all t ∈ I such that:   f0 = 1X,    f1(X) = Y,    ft|Y = 1Y for all t ∈ I, and    the function H: X × I → X defined by H(p,t) := ft(p), for all p ∈ X and t ∈ I, is continuous.     The function H is also called a deformation retraction from X to Y.  The space Y is called a deformation retract of X, written X ⇝* Y.      If {ft}t ∈ I is a deformation retraction from a topological space X onto a subspace Y, then ft: X → X is continuous for all t ∈ I. Moreover, f1 is the composition of a retraction from X to Y with the inclusion map i: Y ↪ X.      Let X and Y be topological spaces and let f:X → Y be a continuous map. Let (X × I) ∐ Y have the disjoint union topology (where X × I has the product topology), and let ∼ be the minimal equivalence relation on (X × I) ∐ Y such that (p,1) ∼ f(p) for all p ∈ X. The mapping cylinder of f is the quotient space Xf := ((X × I) ∐ Y)\/∼.      If X and Y are topological spaces and f:X → Y is a continuous map, then Y is homeomorphic to a deformation retract of the mapping cylinder Xf associated to f.      Let X be a topological space and let f:X → X be a continuous map. Let X × I have the product topology, and let ∼ be the minimal equivalence relation on X × I such that (p,1) ∼ (f(p),0) for all p ∈ X. The mapping torus of f is the quotient space Tf := (X × I)\/∼.     If X is a topological space and f:X → X is a continuous map, then X may not be homeomorphic to a deformation retract of the mapping cylinder Tf associated to f.   "
},
{
  "id": "def-retract",
  "level": "2",
  "url": "sec-retracts.html#def-retract",
  "type": "Definition",
  "number": "4.1",
  "title": "",
  "body": "  Let A be a subspace of a topological space X. The space A is a retract of X if there is a continuous function r: X → A satisfying r(a) = a for all a ∈ A.  The function r is called a retraction from X to A.   "
},
{
  "id": "def-deformation-retraction",
  "level": "2",
  "url": "sec-retracts.html#def-deformation-retraction",
  "type": "Definition",
  "number": "4.2",
  "title": "",
  "body": "  Let Y be a subspace of a topological space X. A deformation retraction of X onto Y is a family of maps ft: X → X for all t ∈ I such that:   f0 = 1X,    f1(X) = Y,    ft|Y = 1Y for all t ∈ I, and    the function H: X × I → X defined by H(p,t) := ft(p), for all p ∈ X and t ∈ I, is continuous.     The function H is also called a deformation retraction from X to Y.  The space Y is called a deformation retract of X, written X ⇝* Y.   "
},
{
  "id": "thm-414",
  "level": "2",
  "url": "sec-retracts.html#thm-414",
  "type": "Theorem",
  "number": "4.3",
  "title": "",
  "body": "  If {ft}t ∈ I is a deformation retraction from a topological space X onto a subspace Y, then ft: X → X is continuous for all t ∈ I. Moreover, f1 is the composition of a retraction from X to Y with the inclusion map i: Y ↪ X.   "
},
{
  "id": "def-mapping-cylinder",
  "level": "2",
  "url": "sec-retracts.html#def-mapping-cylinder",
  "type": "Definition",
  "number": "4.4",
  "title": "",
  "body": "  Let X and Y be topological spaces and let f:X → Y be a continuous map. Let (X × I) ∐ Y have the disjoint union topology (where X × I has the product topology), and let ∼ be the minimal equivalence relation on (X × I) ∐ Y such that (p,1) ∼ f(p) for all p ∈ X. The mapping cylinder of f is the quotient space Xf := ((X × I) ∐ Y)\/∼.   "
},
{
  "id": "thm-422",
  "level": "2",
  "url": "sec-retracts.html#thm-422",
  "type": "Theorem",
  "number": "4.5",
  "title": "",
  "body": "  If X and Y are topological spaces and f:X → Y is a continuous map, then Y is homeomorphic to a deformation retract of the mapping cylinder Xf associated to f.   "
},
{
  "id": "def-mapping-torus",
  "level": "2",
  "url": "sec-retracts.html#def-mapping-torus",
  "type": "Definition",
  "number": "4.6",
  "title": "",
  "body": "  Let X be a topological space and let f:X → X be a continuous map. Let X × I have the product topology, and let ∼ be the minimal equivalence relation on X × I such that (p,1) ∼ (f(p),0) for all p ∈ X. The mapping torus of f is the quotient space Tf := (X × I)\/∼.   "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "sec-retracts.html#remark-10",
  "type": "Remark",
  "number": "4.7",
  "title": "",
  "body": " If X is a topological space and f:X → X is a continuous map, then X may not be homeomorphic to a deformation retract of the mapping cylinder Tf associated to f.  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
