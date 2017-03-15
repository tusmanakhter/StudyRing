// var expect = require('chai').expect;
// var assert = chai.assert;

if (Meteor.isServer) {
  describe('Rings', function () {
      //This should always pass
      it("Should pass", function() {
          expect(true).to.be.true;
      });

      //This should always pass
      it('Should start empty', function() {
          var arr = [];
          assert.equal(arr.length, 0);
      });
  })

//Trying to write a test here
//   describe( 'Add a Ring', function() {
//     afterEach( function() {
//         var ring = Rings.findOne( { Name: 'Name', desc: "Desc"} );
//         if ( ring ) {
//             Rings.remove( ring._id );
//         }
//     });

//     it( 'should create a new ring @watch', function() {
//         browser.url( 'http://localhost:3000/rings' )
//             .setValue( '[name=tags', "Tag")
//             .setValue( '[name="title"]', 'Title' )
//             .setValue( '[name="dec"]', 'Peter Bevelin' )
//             .submitForm( 'form' );

//         var getRing = server.execute( function() {
//         return Rings.findOne( { title: 'Title' } );
//         });

//         expect( getBook.title ).to.equal( 'Seeking Wisdom' );
//         });
//     })
}